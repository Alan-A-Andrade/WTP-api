import { client } from '../database.js';
import { CreateUserData, CreateUserSettingsData } from '../interfaces';

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

async function findSettingsByUserId(userId:number) {
  return client.userSettings.findUnique({
    where: {
      userId
    }
  });
}

async function upsertUserSettings(userId: number, CreateUserSettingsData: CreateUserSettingsData) {
  return client.userSettings.upsert({
    where: { userId },
    update: CreateUserSettingsData,
    create: CreateUserSettingsData
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
  upsertUserSettings,
  findSettingsByUserId,
  findByEmail,
  findById,
  insert,
  truncate
};
