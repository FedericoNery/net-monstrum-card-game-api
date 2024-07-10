import { Field, ObjectType } from '@nestjs/graphql';
import { Card } from './card.schema';

@ObjectType({ implements: () => [Card] })
export class CardDigimon implements Card {
  name: string;
  @Field({ nullable: true })
  color: string;

  @Field()
  attackPoints: number;

  @Field()
  healthPoints: number;

  @Field({ nullable: true })
  energyCount: number;

  @Field()
  level: number;

  @Field(() => CardDigimon, { nullable: true })
  evolution?: CardDigimon;

  @Field()
  type: string = 'Digimon';

  static isTypeOf(obj: any): obj is CardDigimon {
    return obj.type === 'Digimon';
  }
}
