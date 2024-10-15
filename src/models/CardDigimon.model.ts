import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Card } from './Card.model';

export type CardDigimonDocument = HydratedDocument<CardDigimon>;

@Schema()
export class CardDigimon extends Card {
  @Prop()
  color: string;

  @Prop({ required: true })
  attackPoints: number;

  @Prop({ required: true })
  healthPoints: number;

  @Prop({ required: true })
  energyCount: number;

  @Prop()
  level: number;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'CardDigimon',
    default: null,
    required: false,
  })
  evolution?: MongooseSchema.Types.ObjectId;
}
export const CardDigimonSchema = SchemaFactory.createForClass(CardDigimon);
