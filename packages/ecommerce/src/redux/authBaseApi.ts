import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import qs from 'qs';

import { RootState } from './store';
import { baseUrl } from './api';

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.jwt;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('Authorization', `bearer ${token}`);
    }

    return headers;
  },
  paramsSerializer: (params) => qs.stringify(params, { encodeValuesOnly: true, arrayFormat: 'indices' }),
});

export const authBaseApi = createApi({
  baseQuery,
  reducerPath: 'authApi',
  tagTypes: ['Profile', 'Addresses'],
  endpoints: () => ({}),
});
