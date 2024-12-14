import { IBase } from './common';

export type ImageSizeType = 'large' | 'medium' | 'small';

export interface IImageFormat {
  ext: string;
  hash: string;
  width: number;
  height: number;
  mime: string;
  name: string;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface IMedia extends IBase {
  ext: string;
  mime: string;
  size: number;
  idth: number;
  height: number;
  url: string;
  formats: Record<'thumbnail' | ImageSizeType, IImageFormat>;
}
