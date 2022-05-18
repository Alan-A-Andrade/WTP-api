
import { users } from '@prisma/client';

export type CreateUserData = Omit<users, 'id'>;
