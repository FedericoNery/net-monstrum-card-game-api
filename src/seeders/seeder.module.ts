import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../models/User.model';
import { UsersSeederService } from './services/users.seeder.service';
import { CardsSeederService } from './services/digimons.seeder.service';
import { CardDigimon, CardDigimonSchema } from '../models/CardDigimon.model';
import { Card, CardSchema } from '../models/Card.model';
import {
  CardEquipment,
  CardEquipmentSchema,
} from '../models/CardEquipment.model';
import { CardEnergy, CardEnergySchema } from '../models/CardEnergy.model';
import {
  CardSummonDigimon,
  CardSummonDigimonSchema,
} from '../models/CardSummonDigimon.model';
import {
  PurchasedCard,
  PurchasedCardSchema,
} from '../models/PurchasedCard.model';
import { Folder, FolderSchema } from '../models/Folder.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Card.name, schema: CardSchema },
      { name: CardDigimon.name, schema: CardDigimonSchema },
      { name: CardEquipment.name, schema: CardEquipmentSchema },
      { name: CardEnergy.name, schema: CardEnergySchema },
      { name: CardSummonDigimon.name, schema: CardSummonDigimonSchema },
      { name: Folder.name, schema: FolderSchema },
      { name: PurchasedCard.name, schema: PurchasedCardSchema },
    ]),
  ],
  providers: [UsersSeederService, CardsSeederService],
  exports: [UsersSeederService, CardsSeederService],
})
export class SeederModule {}
