import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class SignInInput {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;
}

@ObjectType()
export class User {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;
}

@ObjectType()
export class SignInOutput {
  @Field({ nullable: false })
  access_token: string;
}
