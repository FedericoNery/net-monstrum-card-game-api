import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { CardDocument } from './Card.model';

export type FolderDocument = HydratedDocument<Folder>;

@Schema()
export class Folder extends Document {
  @Prop()
  name: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Card' }] })
  cards: CardDocument[];
}

export const FolderSchema = SchemaFactory.createForClass(Folder);
