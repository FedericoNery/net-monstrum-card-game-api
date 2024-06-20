import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { User, UserDocument } from '../models/User.model';
import { encrypt } from '../utils/encryptation';
import { UserDetailInformation } from '../schemas/user.schemas';

interface CreatedUserOutputDto {
  id: string;
  username: string;
}

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<CreatedUserOutputDto> {
    const createdUser = new this.userModel(createUserDto);
    //VER DE QUIEN ES LA RESPONSABILIDAD DE HASHEAR LA PASS
    createdUser.password = await encrypt(createdUser.password);
    createdUser.save();
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
    console.log(user.folders);
    return {
      username: user.username,
      email: user.email,
      folders: user.folders.map((folder) => ({
        name: folder.name,
        cards: folder.cards.map((card) => ({
          id: card._id,
          name: card.name,
          color: card?.color,
          attackPoints: card?.attackPoints,
          healthPoints: card?.healthPoints,
          energyCount: card?.energyCount,
          quantityOfTargets: card?.quantityOfTargets,
          targetScope: card?.targetScope,
        })),
      })),
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
