import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Card } from './Card.model';

export type CardEnergyDocument = HydratedDocument<CardEnergy>;

@Schema()
export class CardEnergy extends Card {
  @Prop()
  color: string;

  @Prop()
  energyCount: number;
}

export const CardEnergySchema = SchemaFactory.createForClass(CardEnergy);
