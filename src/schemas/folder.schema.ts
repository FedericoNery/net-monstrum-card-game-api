import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Card } from './card.schema';

@ObjectType()
export class Folder {
  @Field()
  name: string;

  @Field((type) => [Card])
  cards: Card[];
}
