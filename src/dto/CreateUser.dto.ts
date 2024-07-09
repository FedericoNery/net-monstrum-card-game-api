export class CreateUserDto {
  readonly username: string;
  readonly password: string;
  readonly email: string;
}

export class LoginInputUserDto {
  readonly username: string;
  readonly password: string;
}
