import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResolversModule } from './resolvers/resolvers.module';
import { AuthModule } from './auth/auth.module';
import { CardSummonDigimon } from './schemas/card_summon_digimon.schema';
import { CardEnergy } from './schemas/card_energy.schema';
import { CardDigimon } from './schemas/card_digimon.schema';
import { CardEquipment } from './schemas/card_equipment.schema';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRoot('mongodb://localhost:27017/nmcg-db'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), './src/schema.gql'),
      sortSchema: true,
      buildSchemaOptions: {
        orphanedTypes: [
          CardSummonDigimon,
          CardEnergy,
          CardDigimon,
          CardEquipment,
        ],
      },
    }),
    ResolversModule,
    //SeederModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    //SeederService
  ],
})
export class AppModule {}
