import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Card {
  @Field()
  name: string;
  @Field()
  color: string;

  @Field()
  attackPoints: number;

  @Field()
  healthPoints: number;

  @Field()
  energyCount: number;

  /*   @Field({nullable: true})
  evolution?: ; */

  @Field({ nullable: true })
  quantityOfTargets: number | null;

  @Field()
  targetScope: string;

/*   @Field({ nullable: true })
  digimonsCards: CardDigimon[]; */
}
