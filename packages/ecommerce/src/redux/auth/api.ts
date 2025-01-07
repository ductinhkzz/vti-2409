import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IUser, LoginProviderPayload, LoginResponseType } from './types';
import { baseUrl } from '../api';
import { RootState } from '../store';
import { buildEndpointPopulate } from '@/utils';
import { IMedia } from '../types';

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
});

export const authApi = createApi({
  baseQuery,
  reducerPath: 'authApi',
  tagTypes: ['Profile'],
  endpoints: (builder) => ({
    loginProvider: builder.query<LoginResponseType, LoginProviderPayload>({
      query({ provider, search }) {
        return {
          url: `/auth/${provider}/callback${search}`,
          method: 'GET',
        };
      },
    }),
    getMe: builder.query<IUser, void>({
      query() {
        const url = buildEndpointPopulate('/users/me', ['avatar']);
        return {
          url,
          method: 'GET',
        };
      },
      providesTags: (u) => [{ type: 'Profile', id: u?.documentId }],
    }),
    forgotPassword: builder.mutation<void, { email: string }>({
      query(arg) {
        return {
          url: 'auth/forgot-password',
          method: 'POST',
          body: { ...arg },
        };
      },
    }),
    uploadFile: builder.mutation<IMedia[], FormData>({
      query(form) {
        return {
          url: '/upload',
          method: 'POST',
          body: form,
        };
      },
      invalidatesTags: ['Profile'],
    }),
    deleteFile: builder.mutation<void, number>({
      query(id) {
        return {
          url: `/upload/files/${id}`,
          method: 'DELETE',
        };
      },
    }),
    updateProfile: builder.mutation<IUser, Partial<Omit<IUser, 'avatar'>> & { id: number; avatar?: number }>({
      query({ id, ...arg }) {
        return {
          url: `/users/${id}`,
          method: 'PUT',
          body: { ...arg },
        };
      },
      invalidatesTags: (u) => [{ type: 'Profile', id: u?.documentId }],
    }),
  }),
});

export const {
  useLoginProviderQuery,
  useGetMeQuery,
  useLazyGetMeQuery,
  useForgotPasswordMutation,
  useUploadFileMutation,
  useDeleteFileMutation,
  useUpdateProfileMutation,
} = authApi;
