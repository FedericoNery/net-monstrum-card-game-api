import { Field, ObjectType } from '@nestjs/graphql';
import { Card } from './card.schema';
import { CardDigimon } from './card_digimon.schema';

@ObjectType({ implements: () => [Card] })
export class CardSummonDigimon implements Card {
  name: string;
  @Field(() => [CardDigimon])
  digimonsCards: CardDigimon[];

  @Field()
  type: string = 'SummonDigimon';

  static isTypeOf(obj: any): obj is CardSummonDigimon {
    return obj.type === 'SummonDigimon';
  }
}
