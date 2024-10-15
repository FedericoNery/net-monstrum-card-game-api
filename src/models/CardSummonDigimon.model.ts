import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Card } from './Card.model';
/* import { CardDigimon } from './CardDigimon.model'; */

export type CardSummonDigimonDocument = HydratedDocument<CardSummonDigimon>;

@Schema()
export class CardSummonDigimon extends Card {
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'CardDigimon' })
  digimonsCards: [MongooseSchema.Types.ObjectId];
}

export const CardSummonDigimonSchema =
  SchemaFactory.createForClass(CardSummonDigimon);
