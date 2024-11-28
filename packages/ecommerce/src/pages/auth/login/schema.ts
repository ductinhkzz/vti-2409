import { TypeOf, object, string } from 'zod';

export const loginSchema = object({
  email: string().email(),
  password: string().min(6),
});

export type LoginSchemaType = TypeOf<typeof loginSchema>;
