import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Card } from './Card.model';

export type PurchasedCardDocument = HydratedDocument<PurchasedCard>;

@Schema()
export class PurchasedCard extends Document {
  @Prop()
  quantity: number;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Card' }] })
  card: Card;
}

export const PurchasedCardSchema = SchemaFactory.createForClass(PurchasedCard);
