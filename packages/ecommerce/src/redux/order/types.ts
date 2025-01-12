import { IAddress } from '../address';
import { IUser } from '../auth';
import { IProduct, IProductVariant } from '../product';
import { IBase } from '../types';

export interface IOrder extends IBase {
  orderStatus: string;
  user: IUser;
  total: number;
  address: IAddress;
}

export interface IProductOrder extends IBase {
  product: IProduct;
  productVariant: IProductVariant;
  amount: number;
  order: IOrder;
}

export type CreateProductOrderPayload = {
  product: number;
  productVariant: number;
  amount: number;
  order: number;
};
