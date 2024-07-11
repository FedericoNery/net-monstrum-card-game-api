import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Folder } from './folder.schema';
import { Card } from './card.schema';

@ObjectType()
export class User {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;
}

@ObjectType()
export class UserDetailInformation {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  email: string;

  @Field((type) => [Folder])
  folders: Folder[];
}

@ObjectType()
export class CreatedUserOutput {
  @Field({ nullable: false })
  id: string;

  @Field({ nullable: false })
  username: string;
}

@ObjectType()
export class AvailableCardToPurchase {
  @Field({ nullable: false })
  quantity: number;

  @Field(() => Card)
  card: Card;
}


@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;

  @Field({ nullable: false })
  email: string;
}

//TODO :: directamente pasar el token del user a futuro
// agregar parametro de cantidad de cartas que desea
@InputType()
export class PurchaseCardInput {
  @Field({ nullable: false })
  userId: string;

  @Field({ nullable: false })
  cardIdToPurchase: string;
}

@ObjectType()
export class PurchaseCardOutput {
  @Field()
  successful: boolean;

  @Field()
  cardNotFound: boolean;

  @Field()
  insuficientCoins: boolean;

  @Field()
  reachedMaxCopiesOfCard: boolean;
}
