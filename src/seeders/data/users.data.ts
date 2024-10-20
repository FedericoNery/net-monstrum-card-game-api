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
    ],
    role: 'player',
    coins: 100,
  },
  {
    username: 'User 2',
    password: bcrypt.hashSync('12345', saltRounds),
    email: 'email1@email.com',
    folders: folders2,
    purchasedCards: [
      { card: '664e8b7ceb0218b7c40ce0a5', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a6', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a7', quantity: 4 },
      { card: '664e8b7ceb0218b7c40ce0a8', quantity: 4 },
    ],
    role: 'admin',
    coins: 100,
  },
];

export { usersData };
