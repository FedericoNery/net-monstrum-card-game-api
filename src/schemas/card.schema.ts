import { Field, InterfaceType } from '@nestjs/graphql';

const CARD_TYPE = {
  DIGIMON: 'Digimon',
  EQUIPMENT: 'Equipment',
  ENERGY: 'Energy',
  SUMMON_DIGIMON: 'SummonDigimon',
};

@InterfaceType({
  resolveType(card) {
    if (card.type === CARD_TYPE.DIGIMON) {
      return 'CardDigimon';
    }
    if (card.type === CARD_TYPE.ENERGY) {
      return 'CardEnergy';
    }
    if (card.type === CARD_TYPE.EQUIPMENT) {
      return 'CardEquipment';
    }
    if (card.type === CARD_TYPE.SUMMON_DIGIMON) {
      return 'CardSummonDigimon';
    }
    return null;
  },
})
export abstract class Card {
  @Field()
  name: string;

  @Field()
  type: string;
}
