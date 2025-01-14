import { TypeOf, object, string } from 'zod';

export const registerSchema = object({
  name: string().nonempty({ message: 'Required' }).min(3, { message: 'At least 3 characters' }),
  username: string().nonempty({ message: 'Required' }).min(6, { message: 'At least 6 characters' }),
  email: string().nonempty({ message: 'Required' }).email({ message: 'Invalid email' }),
  password: string().nonempty({ message: 'Required' }).min(6, { message: 'Password must be at least 6 characters' }),
  confirm_password: string()
    .nonempty({ message: 'Required' })
    .min(6, { message: 'Confirm password must be at least 6 characters' }),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirm_password) {
    ctx.addIssue({
      path: ['confirm_password'],
      message: 'Confirm password does not match password',
      code: 'custom',
    });
  }
});

export type RegisterSchemaType = TypeOf<typeof registerSchema>;
