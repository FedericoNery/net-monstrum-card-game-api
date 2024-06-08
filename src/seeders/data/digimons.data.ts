const COLORS = {
  RED: 'Red',
  BLUE: 'Blue',
  WHITE: 'White',
  GREEN: 'Green',
  BLACK: 'Black',
  BROWN: 'Brown',
};

const cardsData = [
  {
    _id: '664e8b7ceb0218b7c40ce0a1',
    name: 'Agumon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0a2',
      name: 'Greymon',
      color: COLORS.RED,
    },
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a2',
    name: 'Greymon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0a3',
      name: 'MetalGreymon (Vaccine)',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a3',
    name: 'MetalGreymon (Vaccine)',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0a4',
      name: 'WarGreymon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a4',
    name: 'WarGreymon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a5',
    name: 'Gabumon',
    color: COLORS.BLUE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0a6',
      name: 'Garurumon',
      color: COLORS.BLUE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a6',
    name: 'Garurumon',
    color: COLORS.BLUE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0a7',
      name: 'WereGarurumon',
      color: COLORS.BLUE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a7',
    name: 'WereGarurumon',
    color: COLORS.BLUE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0a8',
      name: 'MetalGarurumon',
      color: COLORS.BLUE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a8',
    name: 'MetalGarurumon',
    color: COLORS.BLUE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0a9',
    name: 'Veemon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0aa',
      name: 'ExVeemon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0aa',
    name: 'ExVeemon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0ab',
      name: 'Paildramon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ab',
    name: 'Paildramon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0ac',
      name: 'Imperialdramon Fighter Mode',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ac',
    name: 'Imperialdramon Fighter Mode',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ad',
    name: 'Patamon',
    color: COLORS.WHITE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0ae',
      name: 'Angemon',
      color: COLORS.WHITE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ae',
    name: 'Angemon',
    color: COLORS.WHITE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0af',
      name: 'MagnaAngemon',
      color: COLORS.WHITE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0af',
    name: 'MagnaAngemon',
    color: COLORS.WHITE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0b0',
      name: 'Seraphimon',
      color: COLORS.WHITE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b0',
    name: 'Seraphimon',
    color: COLORS.WHITE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b1',
    name: 'Salamon',
    color: COLORS.WHITE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0b2',
      name: 'Gatomon',
      color: COLORS.WHITE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b2',
    name: 'Gatomon',
    color: COLORS.WHITE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0b3',
      name: 'Angewomon',
      color: COLORS.WHITE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b3',
    name: 'Angewomon',
    color: COLORS.WHITE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0b4',
      name: 'Ophanimon',
      color: COLORS.WHITE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b4',
    name: 'Ophanimon',
    color: COLORS.WHITE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b5',
    name: 'Biyomon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0b6',
      name: 'Birdramon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b6',
    name: 'Birdramon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0b7',
      name: 'Garudamon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b7',
    name: 'Garudamon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0b8',
      name: 'Phoenixmon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b8',
    name: 'Phoenixmon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0b9',
    name: 'Tentomon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0ba',
      name: 'Kabuterimon',
      color: COLORS.GREEN,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ba',
    name: 'Kabuterimon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0bb',
      name: 'MegaKabuterimon',
      color: COLORS.GREEN,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0bb',
    name: 'MegaKabuterimon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0bc',
      name: 'HerculesKabuterimon',
      color: COLORS.GREEN,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0bc',
    name: 'HerculesKabuterimon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0bd',
    name: 'Palmon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0be',
      name: 'Togemon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0be',
    name: 'Togemon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0bf',
      name: 'Lillymon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0bf',
    name: 'Lillymon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0c0',
      name: 'Rosemon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c0',
    name: 'Rosemon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c1',
    name: 'Gomamon',
    color: COLORS.BLUE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0c2',
      name: 'Ikkakumon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c2',
    name: 'Ikkakumon',
    color: COLORS.BLUE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0c3',
      name: 'Zudomon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c3',
    name: 'Zudomon',
    color: COLORS.BLUE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0c4',
      name: 'Vikemon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c4',
    name: 'Vikemon',
    color: COLORS.BLUE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c5',
    name: 'Elecmon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0c6',
      name: 'Leomon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c6',
    name: 'Leomon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0c7',
      name: 'IceLeomon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c7',
    name: 'IceLeomon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0c8',
      name: 'Saberdramon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c8',
    name: 'Saberdramon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0c9',
    name: 'Renamon',
    color: COLORS.WHITE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0ca',
      name: 'Kyubimon',
      color: COLORS.WHITE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ca',
    name: 'Kyubimon',
    color: COLORS.WHITE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0cb',
      name: 'Taomon',
      color: COLORS.WHITE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0cb',
    name: 'Taomon',
    color: COLORS.WHITE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0cc',
      name: 'Sakuyamon',
      color: COLORS.WHITE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0cc',
    name: 'Sakuyamon',
    color: COLORS.WHITE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0cd',
    name: 'Terriermon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0ce',
      name: 'Gargomon',
      color: COLORS.GREEN,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ce',
    name: 'Gargomon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0cf',
      name: 'Rapidmon',
      color: COLORS.GREEN,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0cf',
    name: 'Rapidmon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0d0',
      name: 'MegaGargomon',
      color: COLORS.GREEN,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d0',
    name: 'MegaGargomon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d1',
    name: 'Guilmon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0d2',
      name: 'Growlmon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d2',
    name: 'Growlmon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0d3',
      name: 'WarGrowlmon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d3',
    name: 'WarGrowlmon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0d4',
      name: 'Gallantmon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d4',
    name: 'Gallantmon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d5',
    name: 'Impmon',
    color: 'BLACK',
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0d6',
      name: 'Wizardmon',
      color: 'BLACK',
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d6',
    name: 'Wizardmon',
    color: 'BLACK',
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0d7',
      name: 'Mistymon',
      color: 'BLACK',
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d7',
    name: 'Mistymon',
    color: 'BLACK',
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0d8',
      name: 'Dynasmon',
      color: 'BLACK',
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d8',
    name: 'Dynasmon',
    color: 'BLACK',
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0d9',
    name: 'Kumamon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0da',
      name: 'Grizzlymon',
      color: COLORS.GREEN,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0da',
    name: 'Grizzlymon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0db',
      name: 'Gigasmon',
      color: COLORS.GREEN,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0db',
    name: 'Gigasmon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0dc',
      name: 'Hisyaryumon',
      color: COLORS.GREEN,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0dc',
    name: 'Hisyaryumon',
    color: COLORS.GREEN,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0dd',
    name: 'Agunimon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0de',
      name: 'BurningGreymon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0de',
    name: 'BurningGreymon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0df',
      name: 'Aldamon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0df',
    name: 'Aldamon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0e0',
      name: 'EmperorGreymon',
      color: COLORS.RED,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e0',
    name: 'EmperorGreymon',
    color: COLORS.RED,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e1',
    name: 'Lobomon',
    color: COLORS.BLUE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0e2',
      name: 'KendoGarurumon',
      color: COLORS.BLUE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e2',
    name: 'KendoGarurumon',
    color: COLORS.BLUE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0e3',
      name: 'BeoWolfmon',
      color: COLORS.BLUE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e3',
    name: 'BeoWolfmon',
    color: COLORS.BLUE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: {
      _id: '664e8b7ceb0218b7c40ce0e4',
      name: 'Magnagarurumon',
      color: COLORS.BLUE,
    },
    energyCount: 1,
    type: 'Digimon',
    level: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e4',
    name: 'Magnagarurumon',
    color: COLORS.BLUE,
    attackPoints: 10,
    healthPoints: 10,
    evolution: null,
    energyCount: 1,
    type: 'Digimon',
    level: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e5',
    name: 'Armor +10',
    attackPoints: 0,
    healthPoints: 10,
    targetScope: 'UNIQUE',
    type: 'Equipment',
    quantityOfTargets: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e6',
    name: 'Sword +10',
    attackPoints: 10,
    healthPoints: 0,
    targetScope: 'UNIQUE',
    type: 'Equipment',
    quantityOfTargets: 1,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e7',
    name: 'Armor 2x +10',
    attackPoints: 0,
    healthPoints: 10,
    targetScope: 'PARTIAL',
    type: 'Equipment',
    quantityOfTargets: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e8',
    name: 'Armor 3x +10',
    attackPoints: 0,
    healthPoints: 10,
    targetScope: 'PARTIAL',
    type: 'Equipment',
    quantityOfTargets: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0e9',
    name: 'Armor 4x +10',
    attackPoints: 0,
    healthPoints: 10,
    targetScope: 'PARTIAL',
    type: 'Equipment',
    quantityOfTargets: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ea',
    name: 'Sword 2x +10',
    attackPoints: 10,
    healthPoints: 0,
    targetScope: 'PARTIAL',
    type: 'Equipment',
    quantityOfTargets: 2,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0eb',
    name: 'Sword 3x +10',
    attackPoints: 10,
    healthPoints: 0,
    targetScope: 'PARTIAL',
    type: 'Equipment',
    quantityOfTargets: 3,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ec',
    name: 'Sword 4x +10',
    attackPoints: 10,
    healthPoints: 0,
    targetScope: 'PARTIAL',
    type: 'Equipment',
    quantityOfTargets: 4,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ed',
    name: 'Aura',
    attackPoints: 10,
    healthPoints: 10,
    targetScope: 'ALL',
    type: 'Equipment',
    quantityOfTargets: null,
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ee',
    name: 'Red Energy +1',
    color: COLORS.RED,
    energyCount: 1,
    type: 'Energy',
  },
  {
    _id: '664e8b7ceb0218b7c40ce0ef',
    name: 'Green Energy +1',
    color: COLORS.GREEN,
    energyCount: 1,
    type: 'Energy',
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f0',
    name: 'Black Energy +1',
    color: 'BLACK',
    energyCount: 1,
    type: 'Energy',
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f1',
    name: 'Blue Energy +1',
    color: COLORS.BLUE,
    energyCount: 1,
    type: 'Energy',
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f2',
    name: 'White Energy +1',
    color: COLORS.WHITE,
    energyCount: 1,
    type: 'Energy',
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f3',
    name: 'Brown Energy +1',
    color: 'BROWN',
    energyCount: 1,
    type: 'Energy',
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f4',
    name: 'Red Energy -1',
    color: COLORS.RED,
    energyCount: -1,
    type: 'Energy',
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f5',
    name: 'Green Energy -1',
    color: COLORS.GREEN,
    energyCount: -1,
    type: 'Energy',
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f6',
    name: 'Black Energy -1',
    color: 'BLACK',
    energyCount: -1,
    type: 'Energy',
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f7',
    name: 'Blue Energy -1',
    color: COLORS.BLUE,
    energyCount: -1,
    type: 'Energy',
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f8',
    name: 'White Energy -1',
    color: COLORS.WHITE,
    energyCount: -1,
    type: 'Energy',
  },
  {
    _id: '664e8b7ceb0218b7c40ce0f9',
    name: 'Brown Energy -1',
    color: 'BROWN',
    energyCount: -1,
    type: 'Energy',
  },
  {
    _id: '664e8b7ceb0218b7c40ce0fa',
    name: 'Summon Gatomon x2',
    digimons: [
      {
        _id: '664e8b7ceb0218b7c40ce0fb',
        name: 'Gatomon',
        color: COLORS.WHITE,
        attack: 10,
        defense: 10,
        evolution: { name: 'Angewomon', color: COLORS.WHITE },
        type: 'Digimon',
        level: 2,
      },
      {
        _id: '664e8b7ceb0218b7c40ce0fc',
        name: 'Gatomon',
        color: COLORS.WHITE,
        attack: 10,
        defense: 10,
        evolution: { name: 'Angewomon', color: COLORS.WHITE },
        type: 'Digimon',
        level: 2,
      },
    ],
    type: 'SummonDigimon',
  },
  {
    _id: '664e8b7ceb0218b7c40ce0fd',
    name: 'Summon Angemon x2',
    digimons: [
      {
        _id: '664e8b7ceb0218b7c40ce0fe',
        name: 'Angemon',
        color: COLORS.WHITE,
        attack: 10,
        defense: 10,
        evolution: { name: 'MagnaAngemon', color: COLORS.WHITE },
        type: 'Digimon',
        level: 2,
      },
      {
        _id: '664e8b7ceb0218b7c40ce0ff',
        name: 'Angemon',
        color: COLORS.WHITE,
        attack: 10,
        defense: 10,
        evolution: { name: 'MagnaAngemon', color: COLORS.WHITE },
        type: 'Digimon',
        level: 2,
      },
    ],
    type: 'SummonDigimon',
  },
];

export { cardsData as digimonsData };

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
