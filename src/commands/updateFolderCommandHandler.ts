import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UsersService } from '../service/users.service';
import { FoldersService } from '../service/folders.service';
import { UpdateFolderCommand } from './updateFolderCommand';
import { NotFoundException } from '@nestjs/common';
import { OutputUpdateFolderBuilder } from './outputUpdateFolderBuilder';

@CommandHandler(UpdateFolderCommand)
export class UpdateFolderCommandHandler
  implements ICommandHandler<UpdateFolderCommand>
{
  constructor(
    private readonly usersService: UsersService,
    private readonly foldersService: FoldersService,
  ) {}

  async execute(command: UpdateFolderCommand): Promise<any> {
    const { userId, folderId, cardIds } = command;

    const user = await this.usersService.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found.');
    }

    const folderToUpdate = user.folders.find(
      (x) => x._id.toString() === folderId,
    );

    if (!folderToUpdate) {
      return OutputUpdateFolderBuilder.folderNotFound();
    }

    const hasReachedMaxCopies = this.hasReachedMaxCopiesOfAnyCard(cardIds);
    if (hasReachedMaxCopies) {
      return OutputUpdateFolderBuilder.reachedMaxCopiesOfCard();
    }

    const allIdsExist = await this.foldersService.checkAllIdsExist([
      ...new Set(cardIds),
    ]);

    if (!allIdsExist) {
      return OutputUpdateFolderBuilder.cardNotExist();
    }

    const indexFolderToUpdate = user.folders
      .map((x) => x._id.toString())
      .indexOf(folderId);

    //@ts-ignore
    user.folders[indexFolderToUpdate].cards = cardIds;

    try {
      await user.save();
      return OutputUpdateFolderBuilder.success();
    } catch (error) {
      throw new Error('Failed to update folder.');
      //return OutputUpdateFolderBuilder.default();
    }
  }

  private hasReachedMaxCopiesOfAnyCard(listOfCards: string[]): boolean {
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
}
