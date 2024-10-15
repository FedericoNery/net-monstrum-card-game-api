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

  async getFolderById(userId, folderId) {
    try {
      const user = await this.userModel.findById(userId).lean().exec();
      const folder = user.folders.filter(
        (x) => x._id.toString() === folderId,
      )[0];

      const repetitions = this.countIdRepetitions(
        folder.cards.map((x) => x.toString()),
      );

      const listOfIds = this.removeDuplicates(
        folder.cards.map((x) => x.toString()),
      );

      const cardsPopulated = await this.cardModel
        .find({
          _id: { $in: listOfIds },
        })
        .populate({
          path: 'evolution',
          model: 'Card',
          options: { strictPopulate: false },
        })
        .populate({
          path: 'digimonsCards',
          model: 'Card',
          options: { strictPopulate: false },
        })
        .lean()
        .exec();

      const cardsOfFolder = this.addObjectCopies(cardsPopulated, repetitions);

      return {
        ...folder,
        id: folder._id,
        cards: cardsOfFolder.map((x) => ({ ...x, id: x._id })),
      };
    } catch (error) {
      console.error('Error verificando los IDs:', error);
      return null;
    }
  }

  private addObjectCopies(objectsList, repetitions) {
    const result = [];

    objectsList.forEach((obj) => {
      const id = obj._id; // Asumiendo que el campo _id es el identificador
      const count = repetitions[id] || 1; // Consulta cuántas veces debe repetirse, por defecto 1

      // Añadir el objeto tantas veces como indique el conteo
      for (let i = 0; i < count; i++) {
        result.push({ ...obj }); // Crear una copia del objeto para agregar
      }
    });

    return result;
  }

  private removeDuplicates(idsList) {
    return [...new Set(idsList)];
  }

  private countIdRepetitions(idsList) {
    return idsList.reduce((acc, id) => {
      // Si el ID ya existe en el objeto, incrementa su valor
      if (acc[id]) {
        acc[id]++;
      } else {
        // Si el ID no existe, inicializa su valor en 1
        acc[id] = 1;
      }
      return acc;
    }, {});
  }
}
