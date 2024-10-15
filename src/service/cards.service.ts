import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card, CardDocument } from '../models/Card.model';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}

  async findAll(): Promise<Card[]> {
    const cards = await this.cardModel
      .find()
      .sort({ autoGeneratedId: 1 })
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

    return cards.map((x) => ({ ...x, id: x._id }));
  }
}