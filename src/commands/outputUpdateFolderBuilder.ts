import { UpdatedFolderOutput } from '../schemas/folder.schema';

export class OutputUpdateFolderBuilder {
  static folderNotFound(): UpdatedFolderOutput {
    return {
      successful: false,
      folderNotFound: true,
      cardNotExist: false,
      reachedMaxCopiesOfCard: false,
    };
  }

  static cardNotExist(): UpdatedFolderOutput {
    return {
      successful: false,
      folderNotFound: false,
      cardNotExist: true,
      reachedMaxCopiesOfCard: false,
    };
  }

  static reachedMaxCopiesOfCard(): UpdatedFolderOutput {
    return {
      successful: false,
      folderNotFound: false,
      cardNotExist: false,
      reachedMaxCopiesOfCard: true,
    };
  }

  static success(): UpdatedFolderOutput {
    return {
      successful: true,
      folderNotFound: false,
      cardNotExist: false,
      reachedMaxCopiesOfCard: false,
    };
  }

  static default(): UpdatedFolderOutput {
    return {
      successful: false,
      folderNotFound: false,
      cardNotExist: false,
      reachedMaxCopiesOfCard: false,
    };
  }
}
