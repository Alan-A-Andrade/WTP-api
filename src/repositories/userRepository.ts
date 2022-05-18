import { client } from '../database.js';
import { CreateUserData } from '../interfaces';

async function findById(id: number) {
  return client.users.findUnique({
    where: {
      id
    }
  });
}
async function findByEmail(email: string) {
  return client.users.findUnique({
    where: {
      email
    }
  });
}

async function insert(createUserData: CreateUserData) {
  return client.users.create({
    data: createUserData
  });
}

async function truncate() {
  await client.$executeRaw`TRUNCATE TABLE users`;
}

export default {
  findByEmail,
  findById,
  insert,
  truncate
};
