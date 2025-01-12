import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './api';
import { IUser } from './types';
import { LocalStorageService } from '@/services';
import { JWT_STORAGE_KEY } from '@/constants';

export type AuthStateType = {
  jwt?: string | null;
  user?: IUser | null;
  isLoading?: boolean;
};

const initialState: AuthStateType = {
  jwt: LocalStorageService.get<string>(JWT_STORAGE_KEY),
};

export const authSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    logout: (state) => {
      LocalStorageService.remove(JWT_STORAGE_KEY);
      return {
        ...state,
        jwt: null,
        user: null,
        isLoading: undefined,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.loginProvider.matchFulfilled, (state, action) => {
      state.jwt = action.payload.jwt;
      LocalStorageService.set(JWT_STORAGE_KEY, action.payload.jwt);
    });
    builder.addMatcher(authApi.endpoints.loginProvider.matchRejected, (state) => {
      state.jwt = null;
      state.user = null;
    });
    builder.addMatcher(authApi.endpoints.loginProvider.matchRejected, (state) => {
      state.jwt = null;
      state.user = null;
      state.isLoading = false;
    });
    builder.addMatcher(authApi.endpoints.getMe.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(authApi.endpoints.getMe.matchFulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addMatcher(authApi.endpoints.getMe.matchRejected, (state) => {
      state.user = null;
      state.jwt = null;
      state.isLoading = false;
      LocalStorageService.remove(JWT_STORAGE_KEY);
    });
  },
});

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
