import { IAddress } from '../address';
import { IUser } from '../auth';
import { IProduct, IProductVariant } from '../product';
import { IBase } from '../types';

export enum OrderStatusEnum {
  DRAFT = 'DRAFT',
  PROCESS = 'PROCESS',
  DELIVERY = 'DELIVERY',
  DONE = 'DONE',
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

type UpdateRelationType = {
  connect: string[];
};

export type CreateProductOrderPayload = {
  product: UpdateRelationType;
  productVariant: UpdateRelationType;
  amount: number;
  order: UpdateRelationType;
};
