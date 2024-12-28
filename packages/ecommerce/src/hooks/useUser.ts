import { useSyncExternalStore } from 'react';

import { USER_STORAGE_KEY } from '@/constants';
import { IUser } from '@/redux/types';
import { LocalStorageService, parse } from '@/services';

const useUser = (): [IUser | null, (val: IUser | null) => void] => {
  const getSnapshot = () => {
    return LocalStorageService.getRaw<string>(USER_STORAGE_KEY);
  };

  const subscribe = (callback: () => void): (() => void) => {
    window.addEventListener('storage', callback);
    return () => {
      window.removeEventListener('storage', callback);
    };
  };
  const value = useSyncExternalStore(subscribe, getSnapshot);

  const setValue = (val: IUser | null) => {
    LocalStorageService.set(USER_STORAGE_KEY, val);
    window.dispatchEvent(new Event('storage'));
  };

  return [parse<IUser>(value), setValue];
};

export { useUser };
