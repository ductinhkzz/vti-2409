import { getBlockPopulate } from '@/utils';
import { api } from '../api';
import { SingleTypePagResponse } from './types';
import { ICategory, ICollection } from '../types';

export const collectionPopulate = [
  'products.thumbnail',
  'products.hoverImage',
  ...getBlockPopulate('topBlocks'),
  ...getBlockPopulate('bottomBlocks'),
];

export const globalApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSingleTypePage: builder.query<SingleTypePagResponse, string>({
      query(name) {
        return {
          url: name,
          method: 'GET',
          params: {
            populate: getBlockPopulate(),
          },
        };
      },
      transformResponse: (response: { data: SingleTypePagResponse }) => {
        return response.data;
      },
    }),
    getCollections: builder.query<ICollection[], void>({
      query() {
        return {
          url: 'categories',
          method: 'GET',
          params: {
            populate: ['categories', 'products'],
          },
        };
      },
      transformResponse: (response: { data: ICollection[] }) => {
        return response.data;
      },
    }),
    getCollection: builder.query<ICollection, string>({
      query(id) {
        return {
          url: `categories/${id}`,
          method: 'GET',
          params: {
            populate: collectionPopulate,
          },
        };
      },
      transformResponse: (response: { data: ICollection }) => {
        return response.data;
      },
    }),
    getCategory: builder.query<ICategory, string>({
      query(id) {
        return {
          url: `sub-categories/${id}`,
          method: 'GET',
          params: {
            populate: collectionPopulate,
          },
        };
      },
      transformResponse: (response: { data: ICollection }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetSingleTypePageQuery, useGetCollectionsQuery, useGetCollectionQuery, useGetCategoryQuery } =
  globalApi;
