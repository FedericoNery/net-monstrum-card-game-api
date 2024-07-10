import { Field, ObjectType } from '@nestjs/graphql';
import { Card } from './card.schema';

@ObjectType({ implements: () => [Card] })
export class CardEquipment implements Card {
  name: string;
  @Field({ nullable: true })
  attackPoints: number;

  @Field({ nullable: true })
  healthPoints: number;

  @Field({ nullable: true })
  quantityOfTargets: number | null;

  @Field({ nullable: true })
  targetScope: string;

  @Field()
  type: string = 'Equipment';

  static isTypeOf(obj: any): obj is CardEquipment {
    return obj.type === 'Equipment';
  }
}
