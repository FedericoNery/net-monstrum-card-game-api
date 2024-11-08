import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from '../auth/auth.service';
import { SignInInput, SignInOutput } from '../schemas/auth.schema';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => SignInOutput)
  async signIn(@Args('signInInput') signInInput: SignInInput) {
    const { username, password } = signInInput;
    return this.authService.signIn(username, password);
  }

  @Mutation(() => SignInOutput)
  async signInWithEmail(@Args('email', { type: () => String }) email: string) {
    return this.authService.signInWithEmail(email);
  }
}
