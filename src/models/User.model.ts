import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Folder } from './Folder.model';
import { PurchasedCard } from './PurchasedCard.model';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  role: string;

  @Prop()
  avatarUrl: string;

  @Prop({
    type: [
      {
        name: String,
        cards: [{ type: MongooseSchema.Types.ObjectId, ref: 'Card' }],
      },
    ],
  })
  folders: Folder[];

  @Prop({
    default: [],
    type: [
      {
        quantity: Number,
        card: { type: MongooseSchema.Types.ObjectId, ref: 'Card' },
      },
    ],
  })
  purchasedCards: PurchasedCard[];

  @Prop()
  coins: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
