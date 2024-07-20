import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Card } from './card.schema';

@ObjectType()
export class Folder {
  @Field()
  name: string;

  @Field(() => [Card])
  cards: Card[];
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
