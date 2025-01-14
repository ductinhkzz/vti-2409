import { TypeOf, object, string } from 'zod';

export const resetPasswordSchema = object({
  password: string().min(6, { message: 'Password must be at least 6 characters' }),
  passwordConfirmation: string().min(6, { message: 'Confirm password must be at least 6 characters' }),
}).superRefine((data, ctx) => {
  if (data.password !== data.passwordConfirmation) {
    ctx.addIssue({
      path: ['confirmPassword'],
      message: 'Confirm password does not match password',
      code: 'custom',
    });
  }
});

export type ResetPasswordSchemaType = TypeOf<typeof resetPasswordSchema>;
