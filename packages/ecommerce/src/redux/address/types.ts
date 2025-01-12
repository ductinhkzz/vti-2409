import { IBase } from '../types';

export interface IAddress extends IBase {
  firstName: string;
  lastName: string;
  company?: string | null;
  phone: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  address1: string;
  address2?: string | null;
}
