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
    updateOrder: builder.mutation<IOrder, Partial<Omit<IOrder, 'user' | 'address'>> & { user?: number, address?: string, documentId: string }>({
      query: ({ documentId, ...order }) => ({
        url: `orders/${documentId}`,
        method: 'PUT',
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
    updateProductOrder: builder.mutation<IProductOrder, { id: string; amount: number }>({
      query: ({ id, ...params }) => ({
        url: `product-orders/${id}`,
        method: 'PUT',
        body: {
          data: params,
        },
      }),
    }),
    deleteProductOrder: builder.mutation<IProductOrder, string>({
      query: (documentId) => ({
        url: `product-orders/${documentId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetOrderQuery,
  useGetOrdersQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useCreateProductOrderMutation,
  useUpdateProductOrderMutation,
  useDeleteProductOrderMutation,
} = orderApi;
