import {
  CreateProductOrderPayload,
  useCreateOrderMutation,
  useCreateProductOrderMutation,
  useGetOrdersQuery,
  useUpdateProductOrderMutation,
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
      populate: ['productOrders.product.thumbnail', 'productOrders.productVariant.attributes', 'user'],
    },
    {
      skip: !user,
    },
  );

  const [createOrder, { isLoading: isCreating, isSuccess: isCreated }] = useCreateOrderMutation();
  const [createProductOrder, { isLoading: isCreatingProductOrder, isSuccess: isCreatedProductOrder }] =
    useCreateProductOrderMutation();
  const [updateProductOrder, { isLoading: isUpdatingProductOrder, isSuccess: isUpdatedProductOrder }] =
    useUpdateProductOrderMutation();

  const handleCreateProductOrder = useCallback(
    (payload: Omit<CreateProductOrderPayload, 'order' | 'amount'>) => {
      if (!data[0]) return;

      const existProductOrder = data[0].productOrders.find(
        (p) => p.product.id === payload.product && p.productVariant.id === payload.productVariant,
      );

      if (existProductOrder) {
        updateProductOrder({ id: existProductOrder.documentId, amount: existProductOrder.amount + 1 });
        return;
      }

      createProductOrder({ ...payload, order: data[0].id, amount: 1 });
    },
    [data[0]],
  );

  useEffect(() => {
    if (isSuccess && data.length === 0 && user?.id) {
      createOrder({
        user: user?.id,
      });
    }
  }, [isSuccess, user?.id, data.length]);

  useEffect(() => {
    if (isCreated || isUpdatedProductOrder) {
      refetch();
    }
  }, [isCreated, isUpdatedProductOrder]);

  useEffect(() => {
    if (isCreatedProductOrder) {
      refetch();
    }
  }, [isCreatedProductOrder]);

  return useMemo(
    () => ({
      cart: data[0],
      isLoading: isLoading || isFetching || isCreating || isCreatingProductOrder || isUpdatingProductOrder,
      handleCreateProductOrder,
    }),
    [data, isLoading, isFetching, isCreating, isCreatingProductOrder, handleCreateProductOrder],
  );
};

export { useCart };
