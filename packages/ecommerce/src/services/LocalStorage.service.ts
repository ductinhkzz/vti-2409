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

export class LocalStorageService {
  static get<T>(key: string): T | null {
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
