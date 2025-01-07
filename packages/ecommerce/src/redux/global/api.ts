import { buildEndpointPopulate, getBlockPopulate } from '@/utils';
import { api } from '../api';
import { SingleTypePagResponse } from './types';
import { ICategory, ICollection } from '../types';

export const collectionPopulate = [
  'products',
  'products.thumbnail',
  'products.hoverImage',
  ...getBlockPopulate('topBlocks'),
  ...getBlockPopulate('bottomBlocks'),
];

export const globalApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSingleTypePage: builder.query<SingleTypePagResponse, string>({
      query(name) {
        const endpoint = buildEndpointPopulate(name, getBlockPopulate());
        return {
          url: endpoint,
          method: 'GET',
        };
      },
      transformResponse: (response: { data: SingleTypePagResponse }) => {
        return response.data;
      },
    }),
    getCollections: builder.query<ICollection[], void>({
      query() {
        const endpoint = buildEndpointPopulate('categories', ['categories', 'products']);
        return {
          url: endpoint,
          method: 'GET',
        };
      },
      transformResponse: (response: { data: ICollection[] }) => {
        return response.data;
      },
    }),
    getCollection: builder.query<ICollection, string>({
      query(id) {
        const endpoint = buildEndpointPopulate(`categories/${id}`, collectionPopulate);
        return {
          url: endpoint,
          method: 'GET',
        };
      },
      transformResponse: (response: { data: ICollection }) => {
        return response.data;
      },
    }),
    getCategory: builder.query<ICategory, string>({
      query(id) {
        const endpoint = buildEndpointPopulate(`sub-categories/${id}`, collectionPopulate);
        return {
          url: endpoint,
          method: 'GET',
        };
      },
      transformResponse: (response: { data: ICollection }) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useGetSingleTypePageQuery,
  useGetCollectionsQuery,
  useGetCollectionQuery,
  useGetCategoryQuery,
} = globalApi;
