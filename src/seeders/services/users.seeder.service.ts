import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../models/User.model';
import { usersData } from '../data/users.data';

@Injectable()
export class UsersSeederService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async seed() {
    try {
      await this.userModel.create(usersData);
      console.log('UserSeeder: Data seeding completed.');
    } catch (error) {
      console.error('UserSeeder: Data seeding failed.', error);
    }
  }

  async drop() {
    try {
      await this.userModel.deleteMany({});
      console.log('UserSeeder: Data drop completed.');
    } catch (error) {
      console.error('UserSeeder: Data drop failed.', error);
    }
  }
}
