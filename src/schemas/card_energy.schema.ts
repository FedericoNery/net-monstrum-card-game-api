import { Field, ObjectType } from '@nestjs/graphql';
import { Card } from './card.schema';

@ObjectType({ implements: () => [Card] })
export class CardEnergy implements Card {
  name: string;
  @Field({ nullable: true })
  color: string;

  @Field({ nullable: true })
  energyCount: number;

  @Field()
  type: string  = 'Energy';

 static isTypeOf(obj: any): obj is CardEnergy {
    return obj.type === 'Energy';
  }
}
