//NECESITO MOMENTANEAMENTE UN GET ALL

import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '../auth/auth.guard';
import { Card } from '../schemas/card.schema';
import { CardsService } from '../service/cards.service';

@Resolver()
export class CardsResolver {
  constructor(private cardsService: CardsService) {}

  @UseGuards(AuthGuard)
  @Query(() => [Card])
  async cards() {
    const cards = await this.cardsService.findAll();
    return cards;
  }
}
