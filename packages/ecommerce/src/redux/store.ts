import { configureStore } from '@reduxjs/toolkit';

import { api } from './api';
import { authBaseApi } from './authBaseApi';

/**Reducer */
import { globalReducer } from './global';
import { authReducer } from './auth';
import { orderApi } from './order';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducer,
    order: orderApi.reducer,
    [api.reducerPath]: api.reducer,
    [authBaseApi.reducerPath]: authBaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api.middleware, authBaseApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
