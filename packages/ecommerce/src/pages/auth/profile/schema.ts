import { object, string, TypeOf } from 'zod';

export const profileSchema = object({
  email: string().email(),
  password: string().min(6).optional().nullable(),
  username: string().optional().nullable(),
  name: string().optional().nullable(),
  provider: string().optional().nullable(),
});

export type ProfileSchemaType = TypeOf<typeof profileSchema>;