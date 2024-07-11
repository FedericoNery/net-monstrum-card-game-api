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

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  async users() {
    const users = await this.usersService.findAll();
    return users;
  }

  @Query(() => UserDetailInformation)
  async getUserById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<UserDetailInformation> {
    const user = await this.usersService.findByIdWithAggregations(id);
    return user;
  }

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

  @Query(() => [AvailableCardToPurchase])
  async getAvailableCardsToPurchase(
    @Args('userId', { type: () => String }) userId: string,
  ): Promise<AvailableCardToPurchase[]> {
    //@ts-ignore
    const availableCardsToPurchase =
      this.usersService.getAvailableCardsToPurchase(userId);
    console.log(availableCardsToPurchase);
    //@ts-ignore
    return availableCardsToPurchase;
  }

  @Mutation(() => PurchaseCardOutput)
  async purchaseCard(
    @Args('purchaseCardInput') purchaseCardInput: PurchaseCardInput,
  ): Promise<PurchaseCardOutput> {
    return await this.usersService.purchaseCard(purchaseCardInput);
  }

  /*  @UseGuards(AuthGuard)
  @Mutation(() => String)
  async selectInitialPack(
    @Context() context,
    @Args('selectInitialPackInput')
    selectInitialPackInput: SelectInitialPackInput,
  ) {
    const { req } = context;

    if (req.user) {
      const { sub } = req.user;
      this.selectInitialCommandHandler.execute({
        packId: selectInitialPackInput.packId,
        userId: sub,
      });
      return 'User asigned pack';
    }
    return 'Session not available';
  } */
}
