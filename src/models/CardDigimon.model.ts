import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Card } from './Card.model';

export type CardDigimonDocument = HydratedDocument<CardDigimon>;

@Schema()
export class CardDigimon extends Card {
  @Prop()
  color: string;

  @Prop()
  attackPoints: number;

  @Prop()
  healthPoints: number;

  @Prop()
  energyCount: number;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'CardDigimon' }] })
  evolution: CardDigimon;
}

export const CardDigimonSchema = SchemaFactory.createForClass(CardDigimon);
