import { getBlockPopulate } from '@/utils';
import { api } from '../api';
import { IProduct } from './types';

const productPopulate = [
  'images',
  'banner',
  'banner.image',
  'variants',
  'variants.attributes',
  'productVariants',
  'productVariants.attributes',
  ...getBlockPopulate('blocks'),
];

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query<IProduct, string>({
      query(id) {
        return {
          url: `products/${id}`,
          method: 'GET',
          params: {
            populate: productPopulate
          }
        };
      },
      transformResponse: (response: { data: IProduct }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetProductQuery } = productApi;
