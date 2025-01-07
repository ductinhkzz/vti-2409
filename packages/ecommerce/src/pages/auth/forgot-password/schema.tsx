import { TypeOf, object, string } from 'zod';

export const forgotPasswordSchema = object({
  email: string().email(),
});

export type ForgotPasswordSchemaType = TypeOf<typeof forgotPasswordSchema>;
