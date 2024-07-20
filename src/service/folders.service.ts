import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { CardDigimonDocument } from '../models/CardDigimon.model';
import { User, UserDocument } from '../models/User.model';
import {
  PurchaseCardInput,
  UserDetailInformation,
} from '../schemas/user.schemas';
import { encrypt } from '../utils/encryptation';
import { Folder, FolderDocument } from '../models/Folder.model';
import { CARD_TYPE, defaultFolders } from './constants';
import { Card, CardDocument } from '../models/Card.model';
import {
  PurchasedCard,
  PurchasedCardDocument,
} from '../models/PurchasedCard.model';
import {
  UpdatedFolderOutput,
  UpdateFolderInput,
} from '../schemas/folder.schema';

@Injectable()
export class FoldersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Folder.name) private folderModel: Model<FolderDocument>,
    @InjectModel(Card.name) private cardModel: Model<CardDocument>,
    @InjectModel(PurchasedCard.name)
    private purchasedCardModel: Model<PurchasedCardDocument>,
  ) {}

  async checkAllIdsExist(cardIds) {
    try {
      const cards = await this.cardModel.find({
        _id: { $in: cardIds },
      });

      return cards.length === cardIds.length;
    } catch (error) {
      console.error('Error verificando los IDs:', error);
      return false;
    }
  }
}
