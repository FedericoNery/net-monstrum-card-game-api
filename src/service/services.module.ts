import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from '../models/User.model';
import { UsersService } from './users.service';
import { CardDigimon, CardDigimonSchema } from '../models/CardDigimon.model';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { Card, CardSchema } from '../models/Card.model';
import {
  CardEquipment,
  CardEquipmentSchema,
} from '../models/CardEquipment.model';
import {
  CardSummonDigimon,
  CardSummonDigimonSchema,
} from '../models/CardSummonDigimon.model';
import { CardEnergy, CardEnergySchema } from '../models/CardEnergy.model';
import { Folder, FolderSchema } from '../models/Folder.model';
import {
  PurchasedCard,
  PurchasedCardSchema,
} from '../models/PurchasedCard.model';
import { FoldersService } from './folders.service';
import { CardsService } from './cards.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Folder.name, schema: FolderSchema },
      { name: Card.name, schema: CardSchema },
      { name: CardDigimon.name, schema: CardDigimonSchema },
      { name: CardEquipment.name, schema: CardEquipmentSchema },
      { name: CardSummonDigimon.name, schema: CardSummonDigimonSchema },
      { name: CardEnergy.name, schema: CardEnergySchema },
      { name: PurchasedCard.name, schema: PurchasedCardSchema },
    ]),
  ],
  providers: [
    UsersService,
    JwtService,
    AuthService,
    FoldersService,
    CardsService,
  ],
  exports: [
    UsersService,
    JwtService,
    AuthService,
    FoldersService,
    CardsService,
  ],
})
export class ServicesModule {}
