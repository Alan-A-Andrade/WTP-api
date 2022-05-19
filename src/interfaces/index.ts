
import { users, userSettings } from '@prisma/client';

export type CreateUserData = Omit<users, 'id'>;

export type CreateUserSettingsData = Omit<userSettings, 'id'>
