import { folders, folders2 } from './folders.data';
const bcrypt = require('bcrypt');
const saltRounds = 10;

const usersData = [
  {
    username: 'User 1',
    password: bcrypt.hashSync('12345', saltRounds),
    email: 'email@email.com',
    folders: folders,
    purchasedCards: [],
    role: 'player',
    coins: 100,
  },
  {
    username: 'User 2',
    password: bcrypt.hashSync('12345', saltRounds),
    email: 'email1@email.com',
    folders: folders2,
    purchasedCards: [],
    role: 'admin',
    coins: 100,
  },
];

export { usersData };
