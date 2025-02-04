import {
  CreateProductOrderPayload,
  OrderStatusEnum,
  useCreateOrderMutation,
  useCreateProductOrderMutation,
  useDeleteProductOrderMutation,
  useGetOrdersQuery,
  useUpdateOrderMutation,
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
  const [updateOrder, { isLoading: isUpdating, isSuccess: isUpdated }] = useUpdateOrderMutation();
  const [createProductOrder, { isLoading: isCreatingProductOrder, isSuccess: isCreatedProductOrder }] =
    useCreateProductOrderMutation();
  const [updateProductOrder, { isLoading: isUpdatingProductOrder, isSuccess: isUpdatedProductOrder }] =
    useUpdateProductOrderMutation();
  const [deleteProductOrder, { isLoading: isDeletingProductOrder, isSuccess: isDeletedProductOrder }] =
    useDeleteProductOrderMutation();

  const handleUpdateProductOrder = useCallback((documentId: string, amount: number) => {
    updateProductOrder({ id: documentId, amount });
  }, []);

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

  const handleDeleteProductOrder = useCallback((documentId: string) => {
    deleteProductOrder(documentId);
  }, []);

  const handleUpdateOrder = useCallback((payload: { address: string; total: number; documentId: string }) => {
    updateOrder({ ...payload, orderStatus: OrderStatusEnum.PROCESS });
  }, []);

  useEffect(() => {
    if (isSuccess && data.length === 0 && user?.id) {
      createOrder({
        user: user?.id,
      });
    }
  }, [isSuccess, user?.id, data.length]);

  useEffect(() => {
    if (isCreated || isUpdatedProductOrder || isDeletedProductOrder) {
      refetch();
    }
  }, [isCreated, isUpdatedProductOrder, isDeletedProductOrder]);

  useEffect(() => {
    if (isCreatedProductOrder) {
      refetch();
    }
  }, [isCreatedProductOrder]);

  useEffect(() => {
    if (isUpdated) {
      refetch();
    }
  }, [isUpdated]);

  return useMemo(
    () => ({
      cart: data[0],
      cartItemCount: data[0]?.productOrders.length,
      isUpdated,
      isLoading:
        isLoading ||
        isFetching ||
        isCreating ||
        isCreatingProductOrder ||
        isUpdatingProductOrder ||
        isUpdating ||
        isDeletingProductOrder,
      handleCreateProductOrder,
      handleUpdateOrder,
      handleDeleteProductOrder,
      handleUpdateProductOrder,
    }),
    [
      data,
      isLoading,
      isFetching,
      isCreating,
      isCreatingProductOrder,
      handleCreateProductOrder,
      handleUpdateOrder,
      handleUpdateProductOrder,
      handleDeleteProductOrder,
    ],
  );
};

export { useCart };
