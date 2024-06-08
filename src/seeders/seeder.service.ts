import { Injectable } from '@nestjs/common';
import { CardsSeederService } from './services/digimons.seeder.service';
import { UsersSeederService } from './services/users.seeder.service';

@Injectable()
export class SeederService {
  constructor(
    private readonly userService: UsersSeederService,
    private readonly cardsService: CardsSeederService,
  ) {}

  async seed() {
    try {
      await this.cardsService.seed();
      await this.userService.seed();
      console.log('Seeder: Data seeding completed.');
    } catch (error) {
      console.error('Seeder: Data seeding failed.', error);
    }
  }

  async drop() {
    try {
      await this.userService.drop();
      await this.cardsService.drop();
      console.log('Seeder: Data Droped completed.');
    } catch (error) {
      console.error('Seeder: Data Droped failed.', error);
    }
  }
}
