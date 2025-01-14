import { TypeOf, object, string } from 'zod';

export const registerSchema = object({
  username: string().min(6, { message: 'At least 6 characters' }),
  email: string().email({ message: 'Email is invalid format.' }),
  password: string().min(6, { message: 'Password must be at least 6 characters' }),
  confirmPassword: string().min(6, { message: 'Confirm password must be at least 6 characters' }),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      path: ['confirmPassword'],
      message: 'Confirm password does not match password',
      code: 'custom',
    });
  }
});

export type RegisterSchemaType = TypeOf<typeof registerSchema>;
