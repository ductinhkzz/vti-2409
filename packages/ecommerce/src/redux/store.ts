import { configureStore, isRejectedWithValue, Middleware } from '@reduxjs/toolkit';

import { api } from './api';
import { authBaseApi } from './authBaseApi';

/**Reducer */
import { globalReducer } from './global';
import { authReducer } from './auth';
import { orderApi } from './order';
import { toast } from '@/hooks';

const SKIP_ERROR_ENDPOINTS = ['login'];

const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action) && !SKIP_ERROR_ENDPOINTS.includes((action.meta.arg as any)?.endpointName)) {
    const payload = action.payload as { data?: unknown };
    if (
      payload &&
      'data' in payload &&
      typeof payload.data === 'object' &&
      payload.data !== null &&
      'error' in payload.data &&
      (payload.data as any).error?.message
    ) {
      toast({
        title: (payload.data as any).error.status,
        description: (payload.data as any).error?.message,
        variant: 'error',
      });
      return next(action);
    }
  }

  return next(action);
};

export const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducer,
    order: orderApi.reducer,
    [api.reducerPath]: api.reducer,
    [authBaseApi.reducerPath]: authBaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([rtkQueryErrorLogger, api.middleware, authBaseApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
