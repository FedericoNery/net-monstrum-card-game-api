import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type CardDocument = HydratedDocument<Card>;

@Schema({ discriminatorKey: 'type' })
export class Card extends Document {
  @Prop()
  name: string;
  @Prop()
  type: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
