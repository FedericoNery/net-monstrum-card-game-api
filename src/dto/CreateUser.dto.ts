export class CreateUserDto {
  readonly username: string;
  readonly password: string;
  readonly digimons = [];
}

export class LoginInputUserDto {
  readonly username: string;
  readonly password: string;
}
