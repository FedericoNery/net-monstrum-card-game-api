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

@Resolver()
export class FoldersResolver {
  constructor(
    private usersService: UsersService,
    private foldersService: FoldersService,
  ) {}

  @UseGuards(AuthGuard)
  @Mutation(() => UpdatedFolderOutput)
  async updateFolder(
    @Args('updateFolderInput') updateFolderInput: UpdateFolderInput,
  ) {
    const user = await this.usersService.findById(updateFolderInput.userId);
    const folderToUpdate = user.folders.filter(
      (x) => x._id.toString() === updateFolderInput.folderId,
    );
    const hasDuplicatedCards = this.checkForDuplicates(
      updateFolderInput.cardIds,
    );

    if (folderToUpdate.length !== 1 || hasDuplicatedCards) {
      return {
        successful: false,
        folderNotFound: folderToUpdate.length !== 1,
        reachedMaxCopiesOfCard: hasDuplicatedCards,
        cardNotExist: false,
      };
    }

    const allIdsExists = await this.foldersService.checkAllIdsExist([
      ...new Set(updateFolderInput.cardIds),
    ]);

    if (!allIdsExists) {
      return {
        successful: false,
        folderNotFound: folderToUpdate.length !== 1,
        cardNotExist: !allIdsExists,
        reachedMaxCopiesOfCard: hasDuplicatedCards,
      };
    }

    const indexFolderToUpdate = user.folders
      .map((x) => x._id.toString())
      .indexOf(updateFolderInput.folderId);

    //@ts-ignore
    user.folders[indexFolderToUpdate].cards = updateFolderInput.cardIds;
    try {
      await user.save();

      return {
        successful: true,
        folderNotFound: folderToUpdate.length !== 1,
        cardNotExist: false,
        reachedMaxCopiesOfCard: hasDuplicatedCards,
      };
    } catch (error) {
      return {
        successful: false,
        folderNotFound: folderToUpdate.length !== 1,
        cardNotExist: allIdsExists,
        reachedMaxCopiesOfCard: hasDuplicatedCards,
      };
    }
  }

  private checkForDuplicates(listOfCards) {
    const cardCounts = {};

    for (const card of listOfCards) {
      if (cardCounts[card]) {
        cardCounts[card]++;
      } else {
        cardCounts[card] = 1;
      }

      if (cardCounts[card] > 4) {
        return true;
      }
    }

    return false;
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
}
