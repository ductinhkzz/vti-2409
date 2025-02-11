import { getBlockPopulate } from '@/utils';
import { api } from '../api';
import { IProduct } from './types';
import { GetDocumentType } from '../types';

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
    getProduct: builder.query<IProduct, GetDocumentType<IProduct>>({
      query(args) {
        return {
          url: `products`,
          method: 'GET',
          params: {
            populate: productPopulate,
            ...args,
          },
        };
      },
      transformResponse: (response: { data: IProduct[] }) => {
        return response.data[0];
      },
    }),
  }),
});

export const { useGetProductQuery } = productApi;
