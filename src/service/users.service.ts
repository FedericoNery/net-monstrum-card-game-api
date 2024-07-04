import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { CardDigimonDocument } from '../models/CardDigimon.model';
import { User, UserDocument } from '../models/User.model';
import { UserDetailInformation } from '../schemas/user.schemas';
import { encrypt } from '../utils/encryptation';

interface CreatedUserOutputDto {
  id: string;
  username: string;
}

const CARD_TYPE = {
  DIGIMON: 'Digimon',
  EQUIPMENT: 'Equipment',
  ENERGY: 'Energy',
  SUMMON_DIGIMON: 'SummonDigimon',
};

const defaultFolders = [
  {
    _id: '6670647552c07bc9e106083d',
    name: 'Folder 1',
    cards: [
      '664e8b7ceb0218b7c40ce0a1',
      '664e8b7ceb0218b7c40ce0a1',
      '664e8b7ceb0218b7c40ce0a1',
      '664e8b7ceb0218b7c40ce0a1',
      '664e8b7ceb0218b7c40ce0a2',
      '664e8b7ceb0218b7c40ce0a2',
      '664e8b7ceb0218b7c40ce0a2',
      '664e8b7ceb0218b7c40ce0a2',
      '664e8b7ceb0218b7c40ce0a3',
      '664e8b7ceb0218b7c40ce0a3',
      '664e8b7ceb0218b7c40ce0a3',
      '664e8b7ceb0218b7c40ce0a3',
      '664e8b7ceb0218b7c40ce0a4',
      '664e8b7ceb0218b7c40ce0a4',
      '664e8b7ceb0218b7c40ce0a4',
      '664e8b7ceb0218b7c40ce0a4',
    ],
  },
  {
    _id: '6670647552c07bc9e106083e',
    name: 'Folder 2',
    cards: [
      '664e8b7ceb0218b7c40ce0a5',
      '664e8b7ceb0218b7c40ce0a5',
      '664e8b7ceb0218b7c40ce0a5',
      '664e8b7ceb0218b7c40ce0a5',
      '664e8b7ceb0218b7c40ce0a6',
      '664e8b7ceb0218b7c40ce0a6',
      '664e8b7ceb0218b7c40ce0a6',
      '664e8b7ceb0218b7c40ce0a6',
      '664e8b7ceb0218b7c40ce0a7',
      '664e8b7ceb0218b7c40ce0a7',
      '664e8b7ceb0218b7c40ce0a7',
      '664e8b7ceb0218b7c40ce0a7',
      '664e8b7ceb0218b7c40ce0a8',
      '664e8b7ceb0218b7c40ce0a8',
      '664e8b7ceb0218b7c40ce0a8',
      '664e8b7ceb0218b7c40ce0a8',
    ],
  },
  {
    _id: '6670647552c07bc9e106083f',
    name: 'Folder 3',
    cards: [
      '664e8b7ceb0218b7c40ce0a9',
      '664e8b7ceb0218b7c40ce0a9',
      '664e8b7ceb0218b7c40ce0a9',
      '664e8b7ceb0218b7c40ce0a9',
      '664e8b7ceb0218b7c40ce0aa',
      '664e8b7ceb0218b7c40ce0aa',
      '664e8b7ceb0218b7c40ce0aa',
      '664e8b7ceb0218b7c40ce0aa',
      '664e8b7ceb0218b7c40ce0ab',
      '664e8b7ceb0218b7c40ce0ab',
      '664e8b7ceb0218b7c40ce0ab',
      '664e8b7ceb0218b7c40ce0ab',
      '664e8b7ceb0218b7c40ce0ac',
      '664e8b7ceb0218b7c40ce0ac',
      '664e8b7ceb0218b7c40ce0ac',
      '664e8b7ceb0218b7c40ce0ac',
    ],
  },
];

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<CreatedUserOutputDto> {
    const createdUser = new this.userModel(createUserDto);
    //VER DE QUIEN ES LA RESPONSABILIDAD DE HASHEAR LA PASS
    createdUser.password = await encrypt(createdUser.password);
    createdUser.folders = defaultFolders;

    //OBTENER OBJECTS ID'S O HARDCODEARLOS
    createdUser.save();
    //@ts-ignore
    return { id: createdUser._id, username: createdUser.username };
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
      })
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
}
