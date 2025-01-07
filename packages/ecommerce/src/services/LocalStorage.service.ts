export const parse = <T>(data: string | null) => {
  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data) as T;
  } catch {
    return null;
  }
};

const isJson = (val: any) => {
  try {
    JSON.parse(val);
    return true;
  } catch {
    return false;
  }
};

export class LocalStorageService {
  static get<T>(key: string): T | null {
    const val = localStorage.getItem(key);

    if (!isJson(val)) {
      return val as T | null;
    }

    return parse(localStorage.getItem(key));
  }

  static getRaw<T>(key: string): T | null {
    return localStorage.getItem(key) as T;
  }

  static set<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }
}
