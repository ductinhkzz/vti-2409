import {
  CreateProductOrderPayload,
  useCreateOrderMutation,
  useCreateProductOrderMutation,
  useGetOrdersQuery,
} from '@/redux/order';
import { useUser } from './useUser';
import { useCallback, useEffect, useMemo } from 'react';

const useCart = () => {
  const { user } = useUser();
  const {
    data = [],
    isLoading,
    isFetching,
    isSuccess,
    refetch,
  } = useGetOrdersQuery(
    {
      filters: {
        user: {
          $eq: user?.id,
        },
        orderStatus: {
          $eq: 'DRAFT',
        },
      },
      populate: ['productOrders'],
    },
    {
      skip: !user,
    },
  );

  const [createOrder, { isLoading: isCreating, isSuccess: isCreated }] = useCreateOrderMutation();
  const [createProductOrder, { isLoading: isCreatingProductOrder, isSuccess: isCreatedProductOrder }] =
    useCreateProductOrderMutation();

  const handleCreateProductOrder = useCallback((payload: CreateProductOrderPayload) => {
    createProductOrder(payload);
  }, []);

  useEffect(() => {
    if (isSuccess && data.length === 0 && user?.id) {
      createOrder({
        user: user?.id,
      });
    }
  }, [isSuccess, user?.id, data.length]);

  useEffect(() => {
    if (isCreated) {
      refetch();
    }
  }, [isCreated]);

  useEffect(() => {
    if (isCreatedProductOrder) {
      refetch();
    }
  }, [isCreatedProductOrder]);

  return useMemo(
    () => ({
      cart: data[0],
      isLoading: isLoading || isFetching || isCreating || isCreatingProductOrder,
      handleCreateProductOrder,
    }),
    [data, isLoading, isFetching, isCreating, isCreatingProductOrder, handleCreateProductOrder],
  );
};

export { useCart };
