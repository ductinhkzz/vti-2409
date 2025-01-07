import { IBase, IMedia } from '../types';

export interface IAttribute extends IBase {
  name: string;
}

export interface IVariant extends IBase {
  name: string;
  attributes: IAttribute[]
}

export interface IProductVariant extends IBase {
  price: number;
  attributes: IAttribute[]
}

export interface IProduct extends IBase {
  name: string;
  price: number;
  description: string | null;
  thumbnail: IMedia | null;
  hoverImage: IMedia | null;
  images: IMedia[];
  banner: {
    title: string;
    body: string;
    image: IMedia;
  };
  features: string | null;
  dimensions: string | null;
  productVariants: IProductVariant[];
  variants: IVariant[]
}