import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Card } from './Card.model';

export type FolderDocument = HydratedDocument<Folder>;

@Schema()
export class Folder {
  @Prop()
  name: string;

  @Prop({ type: [{ type: MongooseSchema.Types.Array, ref: 'Card' }] })
  cards: Card[];
}

export const FolderSchema = SchemaFactory.createForClass(Folder);
