import { folders, folders2 } from './folders.data';
const bcrypt = require('bcrypt');
const saltRounds = 10;

const usersData = [
  {
    username: 'User 1',
    password: bcrypt.hashSync('12345', saltRounds),
    email: 'email@email.com',
    folders: folders,
    purchasedCards: [
      { card: '664e8b7ceb0218b7c40ce0a1', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a2', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a3', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a4', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a5', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a6', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a7', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a8', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0ee', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0f7', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0f1', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0f4', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a9', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0aa', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0ab', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0ac', quantity: 4 },
    ],
    role: 'player',
    avatarUrl: 'taichi.png',
    coins: 100,
  },
  {
    username: 'User 2',
    password: bcrypt.hashSync('12345', saltRounds),
    email: 'email1@email.com',
    folders: folders2,
    purchasedCards: [
      { card: '664e8b7ceb0218b7c40ce0a1', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a2', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a3', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a4', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a5', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a6', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a7', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a8', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0ee', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0f7', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0f1', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0f4', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a9', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0aa', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0ab', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0ac', quantity: 4 },
    ],
    role: 'admin',
    avatarUrl: 'yamato.png',
    coins: 100,
  },
];

export { usersData };
