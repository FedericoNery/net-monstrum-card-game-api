import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Folder } from './folder.schema';

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

@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;
}

//TODO : VER SI EL TIPO DE DATO ES EL CORRECTO
@InputType()
export class SelectInitialPackInput {
  @Field({ nullable: false })
  packId: string;
}
