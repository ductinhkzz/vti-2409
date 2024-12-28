import { createSlice } from '@reduxjs/toolkit';
import { Theme } from './types';
import { LocalStorageService } from '@/services';
import { THEME_STORAGE_KEY } from '@/constants';
import { ICollection } from '../types';
import { globalApi } from './api';

export type GlobalStateType = {
  theme: Theme;
  collections: ICollection[];
};

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const initialState: GlobalStateType = {
  theme: LocalStorageService.get(THEME_STORAGE_KEY) ?? systemTheme,
  collections: [],
};

export const gloablSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      LocalStorageService.set(THEME_STORAGE_KEY, newTheme);
      return {
        ...state,
        theme: newTheme,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(globalApi.endpoints.getCollections.matchFulfilled, (state, action) => {
      state.collections = action.payload;
    });
    builder.addMatcher(globalApi.endpoints.getCollections.matchRejected, (state) => {
      state.collections = [];
    });
  },
});

export const globalReducer = gloablSlice.reducer;

export const { toggleTheme } = gloablSlice.actions;
