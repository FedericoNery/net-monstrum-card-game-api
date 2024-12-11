import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { CardDigimonDocument } from '../models/CardDigimon.model';
import { User, UserDocument } from '../models/User.model';
import {
  CreatedUserByEmailOutput,
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

  async createByEmailAndUsername(
    email: string,
    username: string,
    avatarUrl: string,
  ): Promise<CreatedUserByEmailOutput> {
    const createdUser = new this.userModel();
    createdUser.email = email;
    createdUser.password = '12345'; //TODO :: NO HACE FALTA PASSWORD LOGUEA CONTRA GOOGLE
    createdUser.username = username;
    createdUser.password = await encrypt(createdUser.password);
    createdUser.role = 'player';
    createdUser.coins = 100;
    createdUser.avatarUrl = avatarUrl;
    createdUser.folders = [
      new this.folderModel(defaultFolders[0]),
      new this.folderModel(defaultFolders[1]),
      new this.folderModel(defaultFolders[2]),
    ];
    createdUser.purchasedCards = [
      new this.purchasedCardModel({
        card: '664e8b7ceb0218b7c40ce0a1',
        quantity: 4,
      }),
      new this.purchasedCardModel({
        card: '664e8b7ceb0218b7c40ce0a2',
        quantity: 4,
      }),
      new this.purchasedCardModel({
        card: '664e8b7ceb0218b7c40ce0a3',
        quantity: 4,
      }),
      new this.purchasedCardModel({
        card: '664e8b7ceb0218b7c40ce0a4',
        quantity: 4,
      }),
      new this.purchasedCardModel({
        card: '664e8b7ceb0218b7c40ce0a5',
        quantity: 4,
      }),
      new this.purchasedCardModel({
        card: '664e8b7ceb0218b7c40ce0a6',
        quantity: 4,
      }),
      new this.purchasedCardModel({
        card: '664e8b7ceb0218b7c40ce0a7',
        quantity: 4,
      }),
      new this.purchasedCardModel({
        card: '664e8b7ceb0218b7c40ce0a8',
        quantity: 4,
      }),
      new this.purchasedCardModel({
        card: '664e8b7ceb0218b7c40ce0a9',
        quantity: 4,
      }),
      new this.purchasedCardModel({
        card: '664e8b7ceb0218b7c40ce0aa',
        quantity: 4,
      }),
      new this.purchasedCardModel({
        card: '664e8b7ceb0218b7c40ce0ab',
        quantity: 4,
      }),
      new this.purchasedCardModel({
        card: '664e8b7ceb0218b7c40ce0ac',
        quantity: 4,
      }),
    ];

    const userSearched = await this.userModel
      .findOne({
        $or: [{ email }, { username }],
      })
      .exec();

    if (userSearched) {
      return {
        result: null,
        successfull: false,
        userAlreadyExist: true,
        hasError: false,
      };
    }

    try {
      createdUser.save();
      return {
        result: {
          id: createdUser._id,
          username: createdUser.username,
        },
        successfull: true,
        hasError: false,
        userAlreadyExist: false,
      } as CreatedUserByEmailOutput;
    } catch (error) {
      return {
        result: null,
        hasError: true,
        userAlreadyExist: false,
        successfull: false,
      };
    }
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
        populate: [
          {
            path: 'digimonsCards',
            model: 'Card',
            options: { strictPopulate: false },
          },
          {
            path: 'evolution',
            model: 'CardDigimon',
            options: { strictPopulate: false },
          },
        ],
        options: { strictPopulate: false },
      })
      .lean()
      .exec();
    return this.mapUserToDTO(user);
  }

  async findByEmailWithAggregations(
    email: string,
  ): Promise<UserDetailInformation> {
    try {
      const user = await this.userModel
        .findOne({ email })
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
    } catch (error) {
      return null;
    }
  }
  //SACAR ESTA COSA NO HACE FALTA MAPEAR
  private mapUserToDTO(user: User): UserDetailInformation {
    return {
      id: user._id.toString(),
      username: user.username,
      email: user.email,
      coins: user.coins,
      role: user.role,
      avatarUrl: user.avatarUrl,
      //@ts-ignore
      folders: user.folders.map((folder) => ({
        id: folder._id.toString(),
        name: folder.name,
        cards: folder.cards.map((card) => this.mapCard(card)),
        colors: this.countColorsByType(
          folder.cards.map((card) => this.mapCard(card)),
        ),
      })),
    };
  }

  private countColorsByType(objects) {
    const colorCounts = {
      red: 0,
      green: 0,
      black: 0,
      white: 0,
      blue: 0,
    };

    objects.forEach((obj) => {
      if (obj.type === 'Digimon' || obj.type === 'Energy') {
        const color = obj.color?.toLowerCase();

        if (colorCounts.hasOwnProperty(color)) {
          colorCounts[color]++;
        }
      }
    });

    return colorCounts;
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
        digimonsCards: card?.digimonsCards,
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
        populate: {
          path: 'card',
          model: 'Card',
          options: { strictPopulate: false },
          populate: {
            path: 'digimonsCards',
            model: 'Card',
            options: { strictPopulate: false },
          },
        },
      })
      .lean()
      .exec();

    const cards = await this.cardModel
      .find()
      .sort({ autoGeneratedId: 1 })
      .populate({
        path: 'evolution',
        model: 'Card',
        options: { strictPopulate: false },
      })
      .populate({
        path: 'digimonsCards',
        model: 'Card',
        options: { strictPopulate: false },
      })
      .lean()
      .exec();

    const cardsWithQuantity = cards.map((card: Card) => ({
      card: { ...card, id: card._id },
      quantity: this.getQuantityOfPurchasedCards(
        card._id.toString(),
        user.purchasedCards,
      ),
    }));
    return cardsWithQuantity.filter((card) => card.quantity < 4);
  }

  private getQuantityOfPurchasedCards(
    cardId: string,
    purchasedCards: PurchasedCard[],
  ) {
    const cardSearched = purchasedCards.filter(
      (x) => x.card._id.toString() === cardId,
    );
    if (cardSearched.length === 0) {
      return 0;
    }
    return cardSearched[0].quantity;
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

    const quantityOfCopiesOwned = this.getQuantityOfPurchasedCards(
      purchaseCardInput.cardIdToPurchase,
      user.purchasedCards,
    );

    const purchasedCardEntity = user.purchasedCards.filter(
      (purchasedCardEntity) =>
        purchasedCardEntity.card._id.toString() ===
        purchaseCardInput.cardIdToPurchase,
    );

    if (quantityOfCopiesOwned === 4 || user.coins < card.price) {
      return {
        successful: false,
        cardNotFound: false,
        insuficientCoins: user.coins < card.price,
        reachedMaxCopiesOfCard: quantityOfCopiesOwned === 4,
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
