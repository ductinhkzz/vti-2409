import { IBase, IMedia } from '../types';

export type LoginProviderPayload = {
  provider: string;
  search?: string;
};

export type LoginResponseType = {
  jwt: string;
  user: IUser;
};

export interface IUser extends IBase {
  email: string;
  blocked: boolean;
  provider: string;
  username: string;
  avatar: IMedia | null;
  name?: string;
}
