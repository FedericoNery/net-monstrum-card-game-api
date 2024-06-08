import * as bcrypt from 'bcrypt';

async function encrypt(password: string) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export { encrypt };
