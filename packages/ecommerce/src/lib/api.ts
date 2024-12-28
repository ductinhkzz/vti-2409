import { toast } from '@/hooks';
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  responseType: 'json',
  adapter: 'fetch',
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error as Error);
  },
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error?.code !== 'ERR_CANCELED') {
      toast({
        title: error.response.status,
        description: error.response.statusText,
        variant: 'error',
      });
    }

    return Promise.reject(error as Error);
  },
);
