import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { CardDigimonDocument } from '../models/CardDigimon.model';
import { User, UserDocument } from '../models/User.model';
import {
  PurchaseCardInput,
  UserDetailInformation,
} from '../schemas/user.schemas';
import { encrypt } from '../utils/encryptation';
import { Folder, FolderDocument } from '../models/Folder.model';
import { CARD_TYPE, defaultFolders } from './constants';
import { Card, CardDocument } from '../models/Card.model';
import {
  PurchasedCard,
  PurchasedCardDocument,
} from '../models/PurchasedCard.model';

interface CreatedUserOutputDto {
  id: string;
  username: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Folder.name) private folderModel: Model<FolderDocument>,
    @InjectModel(Card.name) private cardModel: Model<CardDocument>,
    @InjectModel(PurchasedCard.name)
    private purchasedCardModel: Model<PurchasedCardDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<CreatedUserOutputDto> {
    const createdUser = new this.userModel();
    createdUser.email = createUserDto.email;
    createdUser.password = createUserDto.password;
    createdUser.username = createUserDto.username;
    createdUser.password = await encrypt(createdUser.password);
    createdUser.folders = [
      new this.folderModel(defaultFolders[0]),
      new this.folderModel(defaultFolders[1]),
      new this.folderModel(defaultFolders[2]),
    ];

    //OBTENER OBJECTS ID'S O HARDCODEARLOS
    createdUser.save();
    return {
      id: createdUser._id,
      username: createdUser.username,
    } as CreatedUserOutputDto;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  async findById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async findByIdWithAggregations(id: string): Promise<UserDetailInformation> {
    const user = await this.userModel
      .findById(id)
      .populate({
        path: 'folders.cards',
        model: 'Card',
        populate: {
          path: 'evolution',
          model: 'CardDigimon',
          options: { strictPopulate: false },
        },
        options: { strictPopulate: false },
      })
      .lean()
      .exec();
    return this.mapUserToDTO(user);
  }

  private mapUserToDTO(user: User): UserDetailInformation {
    return {
      username: user.username,
      email: user.email,
      //@ts-ignore
      folders: user.folders.map((folder) => ({
        name: folder.name,
        cards: folder.cards.map((card) => this.mapCard(card)),
      })),
    };
  }

  private mapCard(card) {
    const { type } = card;
    if (type === CARD_TYPE.DIGIMON) {
      const cardDigimon = card as CardDigimonDocument;
      return {
        __typename: 'CardDigimon',
        type: CARD_TYPE.DIGIMON,
        id: card._id,
        name: cardDigimon.name,
        color: cardDigimon?.color,
        attackPoints: cardDigimon?.attackPoints ?? 0,
        healthPoints: cardDigimon?.healthPoints ?? 0,
        energyCount: cardDigimon?.energyCount,
        level: cardDigimon?.level ?? 0,
        evolution: cardDigimon?.evolution,
      };
    }
    if (type === CARD_TYPE.SUMMON_DIGIMON) {
      return {
        __typename: 'CardSummonDigimon',
        type: CARD_TYPE.SUMMON_DIGIMON,
        id: card._id,
        name: card.name,
        digimonsCards: card?.digimonCards,
      };
    }
    if (type === CARD_TYPE.EQUIPMENT) {
      return {
        __typename: 'CardEquipment',
        type: CARD_TYPE.EQUIPMENT,
        id: card._id,
        name: card.name,
        attackPoints: card?.attackPoints,
        healthPoints: card?.healthPoints,
        quantityOfTargets: card?.quantityOfTargets,
        targetScope: card?.targetScope,
      };
    }
    if (type === CARD_TYPE.ENERGY) {
      return {
        __typename: 'CardEnergy',
        type: CARD_TYPE.ENERGY,
        id: card._id,
        name: card.name,
        color: card?.color,
        energyCount: card?.energyCount,
      };
    }
    return {
      id: '',
      name: '',
      color: '',
      attackPoints: 0,
      healthPoints: 0,
      energyCount: 0,
      quantityOfTargets: 0,
      level: 0,
      targetScope: '',
      evolution: {},
      __typename: CARD_TYPE.DIGIMON,
    };
  }

  async updateOne(user: Partial<User>): Promise<User> {
    const userUpdated = this.userModel.findOneAndUpdate(
      { _id: user._id },
      { $set: user },
    );
    return userUpdated;
  }

  async getAvailableCardsToPurchase(userId) {
    const user = await this.userModel
      .findById(userId)
      .populate({
        path: 'purchasedCards',
        model: 'PurchasedCard',
        options: { strictPopulate: false },
      })
      .lean()
      .exec();
    console.log(user);

    const cards = await this.cardModel
      .find()
      .populate({
        path: 'evolution',
        model: 'CardDigimon',
        options: { strictPopulate: false },
      })
      .lean()
      .exec();
    const cardsWithQuantity = cards.map((card: Card) => ({
      card: this.mapCard(card),
      //@ts-ignore
      quantity: this.getQuantityOfPurchasedCards(card._id, user.purchasedCards),
    }));

    return cardsWithQuantity.filter((card) => card.quantity > 0);
  }

  private getQuantityOfPurchasedCards(
    cardId: string,
    purchasedCards: PurchasedCard[],
  ) {
    const cardSearched = purchasedCards.filter(
      (card) => card._id.toString() !== cardId,
    );
    if (cardSearched.length === 0) {
      return 4;
    }

    return 4 - cardSearched[0].quantity;
  }

  async purchaseCard(purchaseCardInput: PurchaseCardInput) {
    const user = await this.findById(purchaseCardInput.userId);
    const card = await this.cardModel
      .findById(purchaseCardInput.cardIdToPurchase)
      .populate({
        path: 'evolution',
        model: 'CardDigimon',
        options: { strictPopulate: false },
      })
      .lean()
      .exec();

    if (card === null) {
      return {
        successful: false,
        cardNotFound: true,
        insuficientCoins: false,
        reachedMaxCopiesOfCard: false,
      };
    }

    const availableQuantityToPurchase = this.getQuantityOfPurchasedCards(
      purchaseCardInput.cardIdToPurchase,
      user.purchasedCards,
    );

    const purchasedCardEntity = user.purchasedCards.filter(
      (purchasedCardEntity) =>
        purchasedCardEntity.card._id !== purchaseCardInput.cardIdToPurchase,
    );

    if (availableQuantityToPurchase === 0 || user.coins < card.price) {
      return {
        successful: false,
        cardNotFound: false,
        insuficientCoins: user.coins < card.price,
        reachedMaxCopiesOfCard: availableQuantityToPurchase === 0,
      };
    }

    user.coins = user.coins - card.price;

    if (purchasedCardEntity.length === 0) {
      user.purchasedCards.push(
        new this.purchasedCardModel({
          quantity: 1,
          card: card,
        }),
      );
    } else {
      const indexOfPurchasedCard = user.purchasedCards
        .map((x) => x.card._id.toString())
        .indexOf(purchaseCardInput.cardIdToPurchase);

      user.purchasedCards[indexOfPurchasedCard].quantity =
        user.purchasedCards[indexOfPurchasedCard].quantity + 1;
    }

    try {
      user.save();

      return {
        successful: true,
        cardNotFound: false,
        insuficientCoins: false,
        reachedMaxCopiesOfCard: false,
      };
    } catch (e) {
      return {
        successful: false,
        cardNotFound: false,
        insuficientCoins: false,
        reachedMaxCopiesOfCard: false,
      };
    }
  }
}
