import { IBase } from './common';
import { IMedia } from './media';

export interface ICTA extends IBase {
  target: string;
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
  items: IItem[];
}
