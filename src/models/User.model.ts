import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Folder } from './Folder.model';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop({ type: [{ type: MongooseSchema.Types.Array, ref: 'Folder' }] })
  folders: Folder[];
}

export const UserSchema = SchemaFactory.createForClass(User);
