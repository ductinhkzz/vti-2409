import { IBase } from './common';
import { IMedia } from './media';

export interface IProduct extends IBase {
  name: string;
  price: number;
  description: string | null;
  thumbnail: IMedia | null;
  hoverImage: IMedia | null;
}
