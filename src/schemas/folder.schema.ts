import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Card } from './card.schema';

@ObjectType()
export class Colors {
  @Field()
  green: number;
  @Field()
  red: number;
  @Field()
  blue: number;
  @Field()
  white: number;
  @Field()
  black: number;
}

@ObjectType()
export class Folder {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => [Card])
  cards: Card[];

  @Field()
  colors: Colors;
}

@InputType()
export class UpdateFolderInput {
  @Field({ nullable: false })
  userId: string;

  @Field({ nullable: false })
  folderId: string;

  @Field(() => [String])
  cardIds: string[];
}

@InputType()
export class GetFolderByIdInput {
  @Field({ nullable: false })
  userId: string;

  @Field({ nullable: false })
  folderId: string;
}

@ObjectType()
export class UpdatedFolderOutput {
  @Field()
  successful: boolean;

  @Field()
  folderNotFound: boolean;

  @Field()
  reachedMaxCopiesOfCard: boolean;

  @Field()
  cardNotExist: boolean;
}
