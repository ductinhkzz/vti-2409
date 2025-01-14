import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import { stringify } from '@/utils';

export const baseUrl = import.meta.env.VITE_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl,
  paramsSerializer: (params) => stringify(params),
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: 'rootApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: [],
  endpoints: () => ({}),
});

