import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from '../dto/CreateUser.dto';
import {
  AvailableCardToPurchase,
  CreateUserByEmailInput,
  CreateUserInput,
  CreatedUserByEmailOutput,
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
  @Query(() => UserDetailInformation, { nullable: true })
  async getUserById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<UserDetailInformation> {
    const user = await this.usersService.findByIdWithAggregations(id);
    return user;
  }

  @UseGuards(AuthGuard)
  @Query(() => UserDetailInformation, { nullable: true })
  async getUserByEmail(
    @Args('email', { type: () => String }) email: string,
  ): Promise<UserDetailInformation> {
    const user = await this.usersService.findByEmailWithAggregations(email);
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

    return await this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => CreatedUserByEmailOutput)
  async createUserByEmail(
    @Args('createUserInput') createUserInput: CreateUserByEmailInput,
  ): Promise<CreatedUserByEmailOutput> {
    return await this.usersService.createByEmailAndUsername(
      createUserInput.email,
      createUserInput.username,
    );
  }

  //TODO ESTO DEBERIA DEVOLVER LAS MONEDAS DISPONIBLES DEL USUARIO
  @UseGuards(AuthGuard)
  @Query(() => [AvailableCardToPurchase])
  async getAvailableCardsToPurchase(
    @Args('userId', { type: () => String }) userId: string,
  ): Promise<AvailableCardToPurchase[]> {
    //@ts-ignore
    const availableCardsToPurchase =
      await this.usersService.getAvailableCardsToPurchase(userId);
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
