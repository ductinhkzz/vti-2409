import { IUser, LoginProviderPayload, LoginResponseType } from './types';
import { buildEndpointPopulate } from '@/utils';
import { IMedia } from '../types';
import { authBaseApi } from '../authBaseApi';

export const authApi = authBaseApi.injectEndpoints({
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
