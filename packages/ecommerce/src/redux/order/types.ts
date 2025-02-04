import { IAddress } from '../address';
import { IUser } from '../auth';
import { IProduct, IProductVariant } from '../product';
import { IBase } from '../types';

export enum OrderStatusEnum {
  DRAFT = 'DRAFT',
  PROCESS = 'PROCESS',
  DELIVERY = 'DELIVERY',
  DONE = 'DONE'
}

export interface IOrder extends IBase {
  orderStatus: OrderStatusEnum;
  user: IUser;
  total: number;
  address: IAddress;
  productOrders: IProductOrder[];
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
