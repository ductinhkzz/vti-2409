import { authBaseApi } from '../authBaseApi';
import { GetDocumentType } from '../types';
import { CreateProductOrderPayload, IOrder, IProductOrder } from './types';

export const orderApi = authBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<IOrder[], GetDocumentType<IOrder>>({
      query: (args) => ({
        url: `orders`,
        method: 'GET',
        params: { ...args },
      }),
      transformResponse: (response: { data: IOrder[] }) => response.data,
    }),
    getOrder: builder.query<IOrder, number>({
      query: (id) => ({
        url: `orders/${id}`,
        method: 'GET',
      }),
    }),
    createOrder: builder.mutation<IOrder, Partial<Omit<IOrder, 'user'>> & { user: number }>({
      query: (order) => ({
        url: 'orders',
        method: 'POST',
        body: {
          data: order,
        },
      }),
    }),
    createProductOrder: builder.mutation<IProductOrder, CreateProductOrderPayload>({
      query: (order) => ({
        url: 'product-orders',
        method: 'POST',
        body: {
          data: order,
        },
      }),
    }),
  }),
});

export const { useGetOrderQuery, useGetOrdersQuery, useCreateOrderMutation, useCreateProductOrderMutation } = orderApi;
