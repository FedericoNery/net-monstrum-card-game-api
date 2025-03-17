import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '../auth/auth.guard';
import {
  Folder,
  GetFolderByIdInput,
  UpdatedFolderOutput,
  UpdateFolderInput,
} from '../schemas/folder.schema';
import { FoldersService } from '../service/folders.service';
import { UsersService } from '../service/users.service';
import { AvailableCardToPutInDeck } from '../schemas/user.schemas';
import { CommandBus } from '@nestjs/cqrs';
import { UpdateFolderCommand } from '../commands/updateFolderCommand';

@Resolver()
export class FoldersResolver {
  constructor(
    private usersService: UsersService,
    private foldersService: FoldersService,
    private readonly commandBus: CommandBus,
  ) {}

  @UseGuards(AuthGuard)
  @Mutation(() => UpdatedFolderOutput)
  async updateFolder(
    @Args('updateFolderInput') updateFolderInput: UpdateFolderInput,
  ) {
    return this.commandBus.execute(
      new UpdateFolderCommand(
        updateFolderInput.userId,
        updateFolderInput.folderId,
        updateFolderInput.cardIds,
      ),
    );
  }

  @UseGuards(AuthGuard)
  @Query(() => Folder)
  async getFolderById(
    @Args('getFolderByIdInput') getFolderByIdInput: GetFolderByIdInput,
  ) {
    const folder = await this.foldersService.getFolderById(
      getFolderByIdInput.userId,
      getFolderByIdInput.folderId,
    );
    return folder;
  }

  //TODO ESTO DEBERIA DEVOLVER LAS MONEDAS DISPONIBLES DEL USUARIO
  @UseGuards(AuthGuard)
  @Query(() => [AvailableCardToPutInDeck])
  async getAvailableCardsToPutInDeck(
    @Args('userId', { type: () => String }) userId: string,
  ): Promise<AvailableCardToPutInDeck[]> {
    const availableCardsToPutInDeck =
      await this.foldersService.getAvailableCardsToPutInDeck(userId);

    //@ts-ignore
    return availableCardsToPutInDeck;
  }
}
