const COLORS = {
  RED: 'Red',
  BLUE: 'Blue',
  WHITE: 'White',
  GREEN: 'Green',
  BLACK: 'Black',
  BROWN: 'Brown',
};

const CARD_TYPE = {
  DIGIMON: 'Digimon',
  EQUIPMENT: 'Equipment',
  ENERGY: 'Energy',
  SUMMON_DIGIMON: 'SummonDigimon',
};

const cardsData = [
  {
    _id: '664e8b7ceb0218b7c40ce0a1',
    price: 1,
    name: 'Agumon',
    color: COLORS.RED,
    attackPoints: 5,
    healthPoints: 3,
    energyCount: 1,
    evolution: '664e8b7ceb0218b7c40ce0a2',
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a2',
    price: 4,
    name: 'Greymon',
    color: COLORS.RED,
    attackPoints: 20,
    healthPoints: 20,
    evolution: '664e8b7ceb0218b7c40ce0a3',
    energyCount: 2,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a3',
    price: 7,
    name: 'MetalGreymon (Vaccine)',
    color: COLORS.RED,
    attackPoints: 34,
    healthPoints: 32,
    evolution: '664e8b7ceb0218b7c40ce0a4',

    energyCount: 3,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a4',
    price: 10,
    name: 'WarGreymon',
    color: COLORS.RED,
    attackPoints: 60,
    healthPoints: 55,
    evolution: null,
    energyCount: 4,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a5',
    price: 1,
    name: 'Gabumon',
    color: COLORS.BLUE,
    attackPoints: 4,
    healthPoints: 3,
    evolution: '664e8b7ceb0218b7c40ce0a6',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a6',
    price: 4,
    name: 'Garurumon',
    color: COLORS.BLUE,
    attackPoints: 14,
    healthPoints: 14,
    evolution: '664e8b7ceb0218b7c40ce0a7',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a7',
    price: 7,
    name: 'WereGarurumon',
    color: COLORS.BLUE,
    attackPoints: 32,
    healthPoints: 30,
    evolution: '664e8b7ceb0218b7c40ce0a8',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a8',
    price: 10,
    name: 'MetalGarurumon',
    color: COLORS.BLUE,
    attackPoints: 55,
    healthPoints: 60,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a9',
    price: 1,
    name: 'Veemon',
    color: COLORS.RED,
    attackPoints: 4,
    healthPoints: 4,
    evolution: '664e8b7ceb0218b7c40ce0aa',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0aa',
    price: 4,
    name: 'ExVeemon',
    color: COLORS.RED,
    attackPoints: 17,
    healthPoints: 16,
    evolution: '664e8b7ceb0218b7c40ce0ab',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ab',
    price: 7,
    name: 'Paildramon',
    color: COLORS.RED,
    attackPoints: 35,
    healthPoints: 30,
    evolution: '664e8b7ceb0218b7c40ce0ac',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ac',
    price: 10,
    name: 'Imperialdramon Fighter Mode',
    color: COLORS.RED,
    attackPoints: 65,
    healthPoints: 50,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ad',
    price: 1,
    name: 'Patamon',
    color: COLORS.WHITE,
    attackPoints: 1,
    healthPoints: 4,
    evolution: '664e8b7ceb0218b7c40ce0ae',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ae',
    price: 4,
    name: 'Angemon',
    color: COLORS.WHITE,
    attackPoints: 14,
    healthPoints: 16,
    evolution: '664e8b7ceb0218b7c40ce0af',
    energyCount: 2,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0af',
    price: 7,
    name: 'MagnaAngemon',
    color: COLORS.WHITE,
    attackPoints: 31,
    healthPoints: 33,
    evolution: '664e8b7ceb0218b7c40ce0b0',
    energyCount: 3,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b0',
    price: 10,
    name: 'Seraphimon',
    color: COLORS.WHITE,
    attackPoints: 50,
    healthPoints: 65,
    evolution: null,
    energyCount: 4,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b1',
    price: 1,
    name: 'Salamon',
    color: COLORS.WHITE,
    attackPoints: 0,
    healthPoints: 5,
    evolution: '664e8b7ceb0218b7c40ce0b2',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b2',
    price: 4,
    name: 'Gatomon',
    color: COLORS.WHITE,
    attackPoints: 13,
    healthPoints: 14,
    evolution: '664e8b7ceb0218b7c40ce0b3',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b3',
    price: 7,
    name: 'Angewomon',
    color: COLORS.WHITE,
    attackPoints: 31,
    healthPoints: 33,
    evolution: '664e8b7ceb0218b7c40ce0b4',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b4',
    price: 10,
    name: 'Ophanimon',
    color: COLORS.WHITE,
    attackPoints: 65,
    healthPoints: 50,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b5',
    price: 1,
    name: 'Biyomon',
    color: COLORS.RED,
    attackPoints: 2,
    healthPoints: 2,
    evolution: '664e8b7ceb0218b7c40ce0b6',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b6',
    price: 4,
    name: 'Birdramon',
    color: COLORS.RED,
    attackPoints: 11,
    healthPoints: 9,
    evolution: '664e8b7ceb0218b7c40ce0b7',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b7',
    price: 7,
    name: 'Garudamon',
    color: COLORS.RED,
    attackPoints: 30,
    healthPoints: 25,
    evolution: '664e8b7ceb0218b7c40ce0b8',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b8',
    price: 10,
    name: 'Phoenixmon',
    color: COLORS.RED,
    attackPoints: 45,
    healthPoints: 43,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b9',
    price: 1,
    name: 'Tentomon',
    color: COLORS.GREEN,
    attackPoints: 2,
    healthPoints: 3,
    evolution: '664e8b7ceb0218b7c40ce0ba',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ba',
    price: 4,
    name: 'Kabuterimon',
    color: COLORS.GREEN,
    attackPoints: 14,
    healthPoints: 16,
    evolution: '664e8b7ceb0218b7c40ce0bb',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0bb',
    price: 7,
    name: 'MegaKabuterimon',
    color: COLORS.GREEN,
    attackPoints: 33,
    healthPoints: 36,
    evolution: '664e8b7ceb0218b7c40ce0bc',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0bc',
    price: 10,
    name: 'HerculesKabuterimon',
    color: COLORS.GREEN,
    attackPoints: 50,
    healthPoints: 50,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0bd',
    price: 1,
    name: 'Palmon',
    color: COLORS.GREEN,
    attackPoints: 2,
    healthPoints: 2,
    evolution: '664e8b7ceb0218b7c40ce0be',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0be',
    price: 4,
    name: 'Togemon',
    color: COLORS.GREEN,
    attackPoints: 12,
    healthPoints: 12,
    evolution: '664e8b7ceb0218b7c40ce0bf',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0bf',
    price: 7,
    name: 'Lillymon',
    color: COLORS.GREEN,
    attackPoints: 27,
    healthPoints: 25,
    evolution: '664e8b7ceb0218b7c40ce0c0',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c0',
    price: 10,
    name: 'Rosemon',
    color: COLORS.GREEN,
    attackPoints: 45,
    healthPoints: 45,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c1',
    price: 1,
    name: 'Gomamon',
    color: COLORS.BLUE,
    attackPoints: 2,
    healthPoints: 3,
    evolution: '664e8b7ceb0218b7c40ce0c2',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c2',
    price: 4,
    name: 'Ikkakumon',
    color: COLORS.BLUE,
    attackPoints: 13,
    healthPoints: 13,
    evolution: '664e8b7ceb0218b7c40ce0c3',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c3',
    price: 7,
    name: 'Zudomon',
    color: COLORS.BLUE,
    attackPoints: 34,
    healthPoints: 30,
    evolution: '664e8b7ceb0218b7c40ce0c4',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c4',
    price: 10,
    name: 'Vikemon',
    color: COLORS.BLUE,
    attackPoints: 45,
    healthPoints: 43,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c5',
    price: 1,
    name: 'Elecmon',
    color: COLORS.RED,
    attackPoints: 2,
    healthPoints: 1,
    evolution: '664e8b7ceb0218b7c40ce0c6',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c6',
    price: 4,
    name: 'Leomon',
    color: COLORS.RED,
    attackPoints: 16,
    healthPoints: 18,
    evolution: '664e8b7ceb0218b7c40ce0c7',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c7',
    price: 7,
    name: 'IceLeomon',
    color: COLORS.RED,
    attackPoints: 21,
    healthPoints: 17,
    evolution: '664e8b7ceb0218b7c40ce0c8',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c8',
    price: 10,
    name: 'Saberdramon',
    color: COLORS.RED,
    attackPoints: 40,
    healthPoints: 40,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c9',
    price: 1,
    name: 'Renamon',
    color: COLORS.WHITE,
    attackPoints: 4,
    healthPoints: 4,
    evolution: '664e8b7ceb0218b7c40ce0ca',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ca',
    price: 4,
    name: 'Kyubimon',
    color: COLORS.WHITE,
    attackPoints: 15,
    healthPoints: 16,
    evolution: '664e8b7ceb0218b7c40ce0cb',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0cb',
    price: 7,
    name: 'Taomon',
    color: COLORS.WHITE,
    attackPoints: 32,
    healthPoints: 30,
    evolution: '664e8b7ceb0218b7c40ce0cc',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0cc',
    price: 10,
    name: 'Sakuyamon',
    color: COLORS.WHITE,
    attackPoints: 50,
    healthPoints: 50,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0cd',
    price: 1,
    name: 'Terriermon',
    color: COLORS.GREEN,
    attackPoints: 3,
    healthPoints: 5,
    evolution: '664e8b7ceb0218b7c40ce0ce',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ce',
    price: 4,
    name: 'Gargomon',
    color: COLORS.GREEN,
    attackPoints: 13,
    healthPoints: 12,
    evolution: '664e8b7ceb0218b7c40ce0cf',

    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0cf',
    price: 7,
    name: 'Rapidmon',
    color: COLORS.GREEN,
    attackPoints: 27,
    healthPoints: 20,
    evolution: '664e8b7ceb0218b7c40ce0d0',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d0',
    price: 10,
    name: 'MegaGargomon',
    color: COLORS.GREEN,
    attackPoints: 50,
    healthPoints: 50,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d1',
    price: 1,
    name: 'Guilmon',
    color: COLORS.RED,
    attackPoints: 3,
    healthPoints: 3,
    evolution: '664e8b7ceb0218b7c40ce0d2',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d2',
    price: 4,
    name: 'Growlmon',
    color: COLORS.RED,
    attackPoints: 18,
    healthPoints: 20,
    evolution: '664e8b7ceb0218b7c40ce0d3',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d3',
    price: 7,
    name: 'WarGrowlmon',
    color: COLORS.RED,
    attackPoints: 33,
    healthPoints: 30,
    evolution: '664e8b7ceb0218b7c40ce0d4',

    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d4',
    price: 10,
    name: 'Gallantmon',
    color: COLORS.RED,
    attackPoints: 56,
    healthPoints: 69,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d5',
    price: 1,
    name: 'Impmon',
    color: COLORS.BLACK,
    attackPoints: 2,
    healthPoints: 1,
    evolution: '664e8b7ceb0218b7c40ce0d6',

    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d6',
    price: 4,
    name: 'Wizardmon',
    color: COLORS.BLACK,
    attackPoints: 13,
    healthPoints: 11,
    evolution: '664e8b7ceb0218b7c40ce0d7',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d7',
    price: 7,
    name: 'Mistymon',
    color: COLORS.BLACK,
    attackPoints: 21,
    healthPoints: 17,
    evolution: '664e8b7ceb0218b7c40ce0d8',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d8',
    price: 10,
    name: 'Dynasmon',
    color: COLORS.BLACK,
    attackPoints: 43,
    healthPoints: 45,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d9',
    price: 1,
    name: 'Kumamon',
    color: COLORS.GREEN,
    attackPoints: 5,
    healthPoints: 5,
    evolution: '664e8b7ceb0218b7c40ce0da',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0da',
    price: 4,
    name: 'Grizzlymon',
    color: COLORS.GREEN,
    attackPoints: 16,
    healthPoints: 16,
    evolution: '664e8b7ceb0218b7c40ce0db',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0db',
    price: 7,
    name: 'Gigasmon',
    color: COLORS.GREEN,
    attackPoints: 27,
    healthPoints: 25,
    evolution: '664e8b7ceb0218b7c40ce0dc',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0dc',
    price: 10,
    name: 'Hisyaryumon',
    color: COLORS.GREEN,
    attackPoints: 43,
    healthPoints: 47,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0dd',
    price: 1,
    name: 'Agunimon',
    color: COLORS.RED,
    attackPoints: 5,
    healthPoints: 2,
    evolution: '664e8b7ceb0218b7c40ce0de',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0de',
    price: 4,
    name: 'BurningGreymon',
    color: COLORS.RED,
    attackPoints: 13,
    healthPoints: 17,
    evolution: '664e8b7ceb0218b7c40ce0df',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0df',
    price: 7,
    name: 'Aldamon',
    color: COLORS.RED,
    attackPoints: 28,
    healthPoints: 22,
    evolution: '664e8b7ceb0218b7c40ce0e0',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e0',
    price: 10,
    name: 'EmperorGreymon',
    color: COLORS.RED,
    attackPoints: 59,
    healthPoints: 56,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e1',
    price: 1,
    name: 'Lobomon',
    color: COLORS.BLUE,
    attackPoints: 2,
    healthPoints: 3,
    evolution: '664e8b7ceb0218b7c40ce0e2',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e2',
    price: 4,
    name: 'KendoGarurumon',
    color: COLORS.BLUE,
    attackPoints: 14,
    healthPoints: 16,
    evolution: '664e8b7ceb0218b7c40ce0e3',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e3',
    price: 7,
    name: 'BeoWolfmon',
    color: COLORS.BLUE,
    attackPoints: 26,
    healthPoints: 28,
    evolution: '664e8b7ceb0218b7c40ce0e4',
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e4',
    price: 10,
    name: 'Magnagarurumon',
    color: COLORS.BLUE,
    attackPoints: 59,
    healthPoints: 56,
    evolution: null,
    energyCount: 1,
    type: CARD_TYPE.DIGIMON,
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e5',
    price: 2,
    name: 'Armor +10',
    attackPoints: 0,
    healthPoints: 10,
    targetScope: 'UNIQUE',
    type: CARD_TYPE.EQUIPMENT,
    quantityOfTargets: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e6',
    price: 2,
    name: 'Sword +10',
    attackPoints: 10,
    healthPoints: 0,
    targetScope: 'UNIQUE',
    type: CARD_TYPE.EQUIPMENT,
    quantityOfTargets: 1,
  },
  /* {
    _id: '664e8b7ceb0218b7c40ce0e7',
    price: 1,
    name: 'Armor 2x +10',
    attackPoints: 0,
    healthPoints: 10,
    targetScope: 'PARTIAL',
    type: CARD_TYPE.EQUIPMENT,
    quantityOfTargets: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e8',
    price: 1,
    name: 'Armor 3x +10',
    attackPoints: 0,
    healthPoints: 10,
    targetScope: 'PARTIAL',
    type: CARD_TYPE.EQUIPMENT,
    quantityOfTargets: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e9',
    price: 1,
    name: 'Armor 4x +10',
    attackPoints: 0,
    healthPoints: 10,
    targetScope: 'PARTIAL',
    type: CARD_TYPE.EQUIPMENT,
    quantityOfTargets: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ea',
    price: 1,
    name: 'Sword 2x +10',
    attackPoints: 10,
    healthPoints: 0,
    targetScope: 'PARTIAL',
    type: CARD_TYPE.EQUIPMENT,
    quantityOfTargets: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0eb',
    price: 1,
    name: 'Sword 3x +10',
    attackPoints: 10,
    healthPoints: 0,
    targetScope: 'PARTIAL',
    type: CARD_TYPE.EQUIPMENT,
    quantityOfTargets: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ec',
    price: 1,
    name: 'Sword 4x +10',
    attackPoints: 10,
    healthPoints: 0,
    targetScope: 'PARTIAL',
    type: CARD_TYPE.EQUIPMENT,
    quantityOfTargets: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ed',
    price: 1,
    name: 'Aura',
    attackPoints: 10,
    healthPoints: 10,
    targetScope: 'ALL',
    type: CARD_TYPE.EQUIPMENT,
    quantityOfTargets: null,
  }, */
  {
    _id: '664e8b7ceb0218b7c40ce0ee',
    price: 1,
    name: 'Red Energy +1',
    color: COLORS.RED,
    energyCount: 1,
    type: CARD_TYPE.ENERGY,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ef',
    price: 1,
    name: 'Green Energy +1',
    color: COLORS.GREEN,
    energyCount: 1,
    type: CARD_TYPE.ENERGY,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f0',
    price: 1,
    name: 'Black Energy +1',
    color: COLORS.BLACK,
    energyCount: 1,
    type: CARD_TYPE.ENERGY,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f1',
    price: 1,
    name: 'Blue Energy +1',
    color: COLORS.BLUE,
    energyCount: 1,
    type: CARD_TYPE.ENERGY,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f2',
    price: 1,
    name: 'White Energy +1',
    color: COLORS.WHITE,
    energyCount: 1,
    type: CARD_TYPE.ENERGY,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f3',
    price: 1,
    name: 'Brown Energy +1',
    color: COLORS.BROWN,
    energyCount: 1,
    type: CARD_TYPE.ENERGY,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f4',
    price: 1,
    name: 'Red Energy -1',
    color: COLORS.RED,
    energyCount: -1,
    type: CARD_TYPE.ENERGY,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f5',
    price: 1,
    name: 'Green Energy -1',
    color: COLORS.GREEN,
    energyCount: -1,
    type: CARD_TYPE.ENERGY,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f6',
    price: 1,
    name: 'Black Energy -1',
    color: COLORS.BLACK,
    energyCount: -1,
    type: CARD_TYPE.ENERGY,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f7',
    price: 1,
    name: 'Blue Energy -1',
    color: COLORS.BLUE,
    energyCount: -1,
    type: CARD_TYPE.ENERGY,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f8',
    price: 1,
    name: 'White Energy -1',
    color: COLORS.WHITE,
    energyCount: -1,
    type: CARD_TYPE.ENERGY,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f9',
    price: 1,
    name: 'Brown Energy -1',
    color: COLORS.BROWN,
    energyCount: -1,
    type: CARD_TYPE.ENERGY,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0fa',
    price: 1,
    name: 'Summon Gatomon x2',
    digimonsCards: [
      '664e8b7ceb0218b7c40ce0b2',
      /* {
        cardDigimonId: '664e8b7ceb0218b7c40ce0fb',
        price: 1,
        name: 'Gatomon',
        color: COLORS.WHITE,
        attack: 10,
        defense: 10,
        evolution: { price: 1, name: 'Angewomon', color: COLORS.WHITE },
        type: CARD_TYPE.DIGIMON,
        level: 2,
      } */ '664e8b7ceb0218b7c40ce0b2',
      /* {
        cardDigimonId: '664e8b7ceb0218b7c40ce0fc',
        price: 1,
        name: 'Gatomon',
        color: COLORS.WHITE,
        attack: 10,
        defense: 10,
        evolution: { price: 1, name: 'Angewomon', color: COLORS.WHITE },
        type: CARD_TYPE.DIGIMON,
        level: 2,
      } */
    ],
    type: CARD_TYPE.SUMMON_DIGIMON,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0fd',
    price: 1,
    name: 'Summon Angemon x2',
    digimonsCards: [
      '664e8b7ceb0218b7c40ce0ae',
      /* {
        cardDigimonId: '664e8b7ceb0218b7c40ce0fe',
        price: 1,
        name: 'Angemon',
        color: COLORS.WHITE,
        attack: 10,
        defense: 10,
        evolution: { price: 1, name: 'MagnaAngemon', color: COLORS.WHITE },
        type: CARD_TYPE.DIGIMON,
        level: 2,
      } */ '664e8b7ceb0218b7c40ce0ae',
      /* {
        cardDigimonId: '664e8b7ceb0218b7c40ce0ff',
        price: 1,
        name: 'Angemon',
        color: COLORS.WHITE,
        attack: 10,
        defense: 10,
        evolution: { price: 1, name: 'MagnaAngemon', color: COLORS.WHITE },
        type: CARD_TYPE.DIGIMON,
        level: 2,
      } */
    ],
    type: CARD_TYPE.SUMMON_DIGIMON,
  },
];

let autoGeneratedId = 0;

const digimons = cardsData
  .filter((x) => x.type === CARD_TYPE.DIGIMON)
  .map((x) => {
    autoGeneratedId += 1;
    return { ...x, autoGeneratedId: autoGeneratedId };
  })
  .reverse();
const equipments = cardsData
  .filter((x) => x.type === CARD_TYPE.EQUIPMENT)
  .map((x) => {
    autoGeneratedId += 1;
    return { ...x, autoGeneratedId: autoGeneratedId };
  });
const energies = cardsData
  .filter((x) => x.type === CARD_TYPE.ENERGY)
  .map((x) => {
    autoGeneratedId += 1;
    return { ...x, autoGeneratedId: autoGeneratedId };
  });
const summonDigimons = cardsData
  .filter((x) => x.type === CARD_TYPE.SUMMON_DIGIMON)
  .map((x) => {
    autoGeneratedId += 1;
    return { ...x, autoGeneratedId: autoGeneratedId };
  });
/* const orderedCards = digimons
  .concat(equipments)
  .concat(energies)
  .concat(summonDigimons);

export { orderedCards as digimonsData }; */

export { digimons, equipments, energies, summonDigimons };

/*
"664e8b7ceb0218b7c40ce100"
"664e8b7ceb0218b7c40ce101"
"664e8b7ceb0218b7c40ce102"
"664e8b7ceb0218b7c40ce103"
"664e8b7ceb0218b7c40ce104"
"664e8b7ceb0218b7c40ce105"
"664e8b7ceb0218b7c40ce106"
"664e8b7ceb0218b7c40ce107"
"664e8b7ceb0218b7c40ce108"
"664e8b7ceb0218b7c40ce109"
"664e8b7ceb0218b7c40ce10a"
"664e8b7ceb0218b7c40ce10b"
"664e8b7ceb0218b7c40ce10c"
"664e8b7ceb0218b7c40ce10d"
"664e8b7ceb0218b7c40ce10e"
"664e8b7ceb0218b7c40ce10f"
"664e8b7ceb0218b7c40ce110"
"664e8b7ceb0218b7c40ce111"
"664e8b7ceb0218b7c40ce112"
"664e8b7ceb0218b7c40ce113"
"664e8b7ceb0218b7c40ce114"
"664e8b7ceb0218b7c40ce115"
"664e8b7ceb0218b7c40ce116"
"664e8b7ceb0218b7c40ce117"
"664e8b7ceb0218b7c40ce118"
"664e8b7ceb0218b7c40ce119"
"664e8b7ceb0218b7c40ce11a"
"664e8b7ceb0218b7c40ce11b"
"664e8b7ceb0218b7c40ce11c"
"664e8b7ceb0218b7c40ce11d"
"664e8b7ceb0218b7c40ce11e"
"664e8b7ceb0218b7c40ce11f"
"664e8b7ceb0218b7c40ce120"
"664e8b7ceb0218b7c40ce121"
"664e8b7ceb0218b7c40ce122"
"664e8b7ceb0218b7c40ce123"
"664e8b7ceb0218b7c40ce124"
"664e8b7ceb0218b7c40ce125"
"664e8b7ceb0218b7c40ce126"
"664e8b7ceb0218b7c40ce127"
"664e8b7ceb0218b7c40ce128"
"664e8b7ceb0218b7c40ce129"
"664e8b7ceb0218b7c40ce12a"
"664e8b7ceb0218b7c40ce12b"
"664e8b7ceb0218b7c40ce12c"
"664e8b7ceb0218b7c40ce12d"
"664e8b7ceb0218b7c40ce12e"
"664e8b7ceb0218b7c40ce12f"
"664e8b7ceb0218b7c40ce130"
"664e8b7ceb0218b7c40ce131"
"664e8b7ceb0218b7c40ce132"
"664e8b7ceb0218b7c40ce133"
"664e8b7ceb0218b7c40ce134"
"664e8b7ceb0218b7c40ce135"
"664e8b7ceb0218b7c40ce136"
"664e8b7ceb0218b7c40ce137"
"664e8b7ceb0218b7c40ce138"
"664e8b7ceb0218b7c40ce139"
"664e8b7ceb0218b7c40ce13a"
"664e8b7ceb0218b7c40ce13b"
"664e8b7ceb0218b7c40ce13c"
"664e8b7ceb0218b7c40ce13d"
"664e8b7ceb0218b7c40ce13e"
"664e8b7ceb0218b7c40ce13f"
"664e8b7ceb0218b7c40ce140"
"664e8b7ceb0218b7c40ce141"
"664e8b7ceb0218b7c40ce142"
"664e8b7ceb0218b7c40ce143"
"664e8b7ceb0218b7c40ce144"
"664e8b7ceb0218b7c40ce145"
"664e8b7ceb0218b7c40ce146"
"664e8b7ceb0218b7c40ce147"
"664e8b7ceb0218b7c40ce148"
"664e8b7ceb0218b7c40ce149"
"664e8b7ceb0218b7c40ce14a"
"664e8b7ceb0218b7c40ce14b"
"664e8b7ceb0218b7c40ce14c"
"664e8b7ceb0218b7c40ce14d"
"664e8b7ceb0218b7c40ce14e"
"664e8b7ceb0218b7c40ce14f"
"664e8b7ceb0218b7c40ce150"
"664e8b7ceb0218b7c40ce151"
"664e8b7ceb0218b7c40ce152"
"664e8b7ceb0218b7c40ce153"
"664e8b7ceb0218b7c40ce154"
"664e8b7ceb0218b7c40ce155"
"664e8b7ceb0218b7c40ce156"
"664e8b7ceb0218b7c40ce157"
"664e8b7ceb0218b7c40ce158"
"664e8b7ceb0218b7c40ce159"
"664e8b7ceb0218b7c40ce15a"
"664e8b7ceb0218b7c40ce15b"
"664e8b7ceb0218b7c40ce15c"
"664e8b7ceb0218b7c40ce15d"
"664e8b7ceb0218b7c40ce15e"
"664e8b7ceb0218b7c40ce15f"
"664e8b7ceb0218b7c40ce160"
"664e8b7ceb0218b7c40ce161"
"664e8b7ceb0218b7c40ce162"
"664e8b7ceb0218b7c40ce163"
"664e8b7ceb0218b7c40ce164"
"664e8b7ceb0218b7c40ce165"
"664e8b7ceb0218b7c40ce166"
"664e8b7ceb0218b7c40ce167"
*/
