import { Module } from '@nestjs/common';
import { ServicesModule } from '../service/services.module';
import { FooResolver } from './foo.resolver';
import { UsersResolver } from './users.resolver';
import { User, UserSchema } from '../models/User.model';
import { MongooseModule } from '@nestjs/mongoose';
import { SeederModule } from '../seeders/seeder.module';
import { CardDigimon, CardDigimonSchema } from '../models/CardDigimon.model';
import { AuthResolver } from './auth.resolver';
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
import { Folder, FolderSchema } from '../models/Folder.model';

@Module({
  imports: [
    ServicesModule,
    //SeederModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Folder.name, schema: FolderSchema },
      { name: Card.name, schema: CardSchema },
      { name: CardDigimon.name, schema: CardDigimonSchema },
      { name: CardEquipment.name, schema: CardEquipmentSchema },
      { name: CardEnergy.name, schema: CardEnergySchema },
      { name: CardSummonDigimon.name, schema: CardSummonDigimonSchema },
    ]),
  ],
  controllers: [],
  providers: [FooResolver, UsersResolver, AuthResolver],
})
export class ResolversModule {}
