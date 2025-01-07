import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './global';
import { api } from './api';
import { authReducer, authApi } from './auth';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducer,
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api.middleware, authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
