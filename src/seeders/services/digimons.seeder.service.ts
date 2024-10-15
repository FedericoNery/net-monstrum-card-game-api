import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card } from '../../models/Card.model';
import { CardDigimonSchema } from '../../models/CardDigimon.model';
import { CardEnergySchema } from '../../models/CardEnergy.model';
import { CardEquipmentSchema } from '../../models/CardEquipment.model';
import { CardSummonDigimonSchema } from '../../models/CardSummonDigimon.model';
import {
  digimons,
  energies,
  equipments,
  summonDigimons,
} from '../data/digimons.data';

@Injectable()
export class CardsSeederService implements OnModuleInit {
  constructor(
    @InjectModel(Card.name)
    private readonly cardModel: Model<Card>,
  ) {
    this.onModuleInit();
  }

  async onModuleInit() {
    this.cardModel.discriminator('Energy', CardEnergySchema);
    this.cardModel.discriminator('Digimon', CardDigimonSchema);
    this.cardModel.discriminator('Equipment', CardEquipmentSchema);
    this.cardModel.discriminator('SummonDigimon', CardSummonDigimonSchema);
    console.log('Discriminadores aplicados:', this.cardModel.discriminators);
  }

  async seed() {
    try {
      await this.cardModel.create(digimons);
      await this.cardModel.create(equipments);
      await this.cardModel.create(energies);
      await this.cardModel.create(summonDigimons);
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
