import { IAddress } from './types';
import { authBaseApi } from '../authBaseApi';

export const addressApi = authBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAddresses: builder.query<IAddress[], { user?: number }>({
      query(args) {
        return {
          url: 'addresses',
          method: 'GET',
          params: { ...args },
        };
      },
      transformResponse: (response: { data: IAddress[] }) => {
        return response.data;
      },
      providesTags: [{ type: 'Addresses', id: 'LIST' }],
    }),
    createAddress: builder.mutation<IAddress, { data: Partial<IAddress> }>({
      query({ ...arg }) {
        return {
          url: `/addresses`,
          method: 'POST',
          body: { ...arg },
        };
      },
      invalidatesTags: [{ type: 'Addresses', id: 'LIST' }],
    }),
    updateAddress: builder.mutation<IAddress, { data: Partial<IAddress>; id?: string }>({
      query({ data, id }) {
        return {
          url: `/addresses/${id}`,
          method: 'PUT',
          body: { data },
        };
      },
      invalidatesTags: [{ type: 'Addresses', id: 'LIST' }],
    }),
    deleteAddress: builder.mutation<IAddress, { id?: string }>({
      query({ id }) {
        return {
          url: `/addresses/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [{ type: 'Addresses', id: 'LIST' }],
    }),
  }),
});

export const { useCreateAddressMutation, useGetAddressesQuery, useUpdateAddressMutation, useDeleteAddressMutation } =
  addressApi;
