import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Card } from './Card.model';

export type CardEquipmentDocument = HydratedDocument<CardEquipment>;

@Schema()
export class CardEquipment extends Card {
  @Prop()
  attackPoints: number;

  @Prop()
  healthPoints: number;

  @Prop()
  quantityOfTargets: number | null;

  @Prop()
  targetScope: string;
}

export const CardEquipmentSchema = SchemaFactory.createForClass(CardEquipment);
