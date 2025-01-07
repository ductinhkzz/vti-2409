import { IProduct } from './product';

export interface IBase {
  id: number;
  documentId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

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

export interface ICTA extends IBase {
  target?: string;
  title: string | null;
  url: string;
  text: string | null;
}

export interface IItem extends IBase {
  body: string | null;
  heading: string | null;
  type: string | null;
  image: IMedia | null;
  link: ICTA | null;
  subTitle: string | null;
  textPosition: string | null;
  eyeBrow: string | null;
}

export interface IBlock extends IBase {
  body: string | null;
  eyeBrow: string | null;
  heading: string | null;
  subHeading: string | null;
  textAlign: string | null;
  textAlign2: string | null;
  theme: string | null;
  type: string | null;
  logo: IMedia | null;
  image: IMedia | null;
  image1: IMedia | null;
  image2: IMedia | null;
  video: IMedia | null;
  video1: IMedia | null;
  video2: IMedia | null;
  primaryCTA: ICTA | null;
  secondaryCTA: ICTA | null;
  link: ICTA | null;
  style: string | null;
  items: IItem[];
  images: IMedia[];
}

export interface ICategory extends IBase {
  name: string;
  slug: string;
  products: IProduct[];
  showHeader: boolean;
  topBlocks: IBlock[];
  bottomBlocks: IBlock[];
}

export interface ICollection extends ICategory {
  categories: ICategory[];
}
