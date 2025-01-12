import { object, string, TypeOf } from 'zod';

export const profileSchema = object({
  email: string().email(),
  password: string().min(6).optional().nullable(),
  username: string().optional().nullable(),
  name: string().optional().nullable(),
  provider: string().optional().nullable(),
});

export type ProfileSchemaType = TypeOf<typeof profileSchema>;

export const addressSchema = object({
  firstName: string(),
  lastName: string(),
  company: string().optional().nullable(),
  phone: string().regex(/^\d+$/),
  city: string(),
  province: string(),
  country: string(),
  postalCode: string(),
  address1: string(),
  address2: string().optional().nullable(),
});

export type AddressSchemaType = TypeOf<typeof addressSchema>
