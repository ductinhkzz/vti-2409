import { IUser, LoginProviderPayload, LoginResponseType, ResetPasswordPayload, UserRegisterPayload } from './types';
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
    login: builder.mutation<LoginResponseType, { identifier: string; password: string }>({
      query(arg) {
        return {
          url: 'auth/local',
          method: 'POST',
          body: { ...arg },
        };
      },
      invalidatesTags: (u) => [{ type: 'Profile', id: u?.user.documentId }],
    }),
    resendEmail: builder.mutation<void, { email: string }>({
      query(arg) {
        return {
          url: 'auth/send-email-confirmation',
          method: 'POST',
          body: { ...arg },
        };
      },
    }),
    getMe: builder.query<IUser, void>({
      query() {
        return {
          url: '/users/me',
          method: 'GET',
          params: {
            populate: ['avatar'],
          },
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
    resetPassword: builder.mutation<LoginResponseType, ResetPasswordPayload>({
      query(arg) {
        return {
          url: 'auth/reset-password',
          method: 'POST',
          body: { ...arg },
        };
      },
    }),
    register: builder.mutation<void, UserRegisterPayload>({
      query(arg) {
        return {
          url: 'auth/local/register',
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
  useLoginMutation,
  useGetMeQuery,
  useLazyGetMeQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useUploadFileMutation,
  useDeleteFileMutation,
  useUpdateProfileMutation,
  useRegisterMutation,
  useResendEmailMutation,
} = authApi;
