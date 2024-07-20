import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from '../dto/CreateUser.dto';
import {
  AvailableCardToPurchase,
  CreateUserInput,
  CreatedUserOutput,
  PurchaseCardInput,
  PurchaseCardOutput,
  User,
  UserDetailInformation,
} from '../schemas/user.schemas';
import { UsersService } from '../service/users.service';
import { AuthGuard } from '../auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Query(() => [User])
  async users() {
    const users = await this.usersService.findAll();
    return users;
  }

  @UseGuards(AuthGuard)
  @Query(() => UserDetailInformation)
  async getUserById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<UserDetailInformation> {
    const user = await this.usersService.findByIdWithAggregations(id);
    return user;
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => CreatedUserOutput)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<CreatedUserOutput> {
    const createUserDto: CreateUserDto = {
      username: createUserInput.username,
      password: createUserInput.password,
      email: createUserInput.email,
    };

    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Query(() => [AvailableCardToPurchase])
  async getAvailableCardsToPurchase(
    @Args('userId', { type: () => String }) userId: string,
  ): Promise<AvailableCardToPurchase[]> {
    //@ts-ignore
    const availableCardsToPurchase =
      this.usersService.getAvailableCardsToPurchase(userId);
    //@ts-ignore
    return availableCardsToPurchase;
  }

  @UseGuards(AuthGuard)
  @Mutation(() => PurchaseCardOutput)
  async purchaseCard(
    @Args('purchaseCardInput') purchaseCardInput: PurchaseCardInput,
  ): Promise<PurchaseCardOutput> {
    return await this.usersService.purchaseCard(purchaseCardInput);
  }
}
