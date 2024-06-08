import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { digimonsData } from '../data/digimons.data';
import { Card, CardDocument } from '../../models/Card.model';
import { CardEnergySchema } from '../../models/CardEnergy.model';
import { CardDigimonSchema } from '../../models/CardDigimon.model';
import { CardEquipmentSchema } from '../../models/CardEquipment.model';
import { CardSummonDigimonSchema } from '../../models/CardSummonDigimon.model';

@Injectable()
export class CardsSeederService implements OnModuleInit {
  constructor(
    @InjectModel(Card.name)
    private readonly cardModel: Model<Card>,
  ) {
    this.onModuleInit();
  }

  async onModuleInit() {
    console.log("HOLA");
    this.cardModel.discriminator('Energy', CardEnergySchema);
    this.cardModel.discriminator('Digimon', CardDigimonSchema);
    this.cardModel.discriminator('Equipment', CardEquipmentSchema);
    this.cardModel.discriminator('SummonDigimon', CardSummonDigimonSchema);
    console.log('Discriminadores aplicados:', this.cardModel.discriminators);
  }

  async seed() {
    try {
      await this.cardModel.create(digimonsData);
      console.log('DigimonSeeder: Data seeding completed.');
    } catch (error) {
      console.error('DigimonSeeder: Data seeding failed.', error);
    }
  }

  async drop() {
    try {
      await this.cardModel.deleteMany({});
      console.log('DigimonSeeder: Data drop completed.');
    } catch (error) {
      console.error('DigimonSeeder: Data drop failed.', error);
    }
  }
}
