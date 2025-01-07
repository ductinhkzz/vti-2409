import { buildEndpointPopulate, getBlockPopulate } from '@/utils';
import { api } from '../api';
import { IProduct } from './types';

export const collectionPopulate = [
  'products',
  'products.thumbnail',
  'products.hoverImage',
  ...getBlockPopulate('topBlocks'),
  ...getBlockPopulate('bottomBlocks'),
];

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
        const endpoint = buildEndpointPopulate(`products/${id}`, productPopulate);
        return {
          url: endpoint,
          method: 'GET',
        };
      },
      transformResponse: (response: { data: IProduct }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetProductQuery } = productApi;
