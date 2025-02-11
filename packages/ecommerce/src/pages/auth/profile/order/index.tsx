import { useMemo, useState } from 'react';
import { ColumnDef, PaginationState } from '@tanstack/react-table';

import { DataTable, LoadingWrapper } from '@/components';
import { useUser } from '@/hooks';
import { IOrder, useGetOrdersQuery } from '@/redux/order';
import { formattedNumber } from '@/utils';
import { ReceiverCell } from './components';

const Order = () => {
  const { user } = useUser();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading, isFetching } = useGetOrdersQuery(
    {
      filters: {
        user: {
          $eq: user?.id,
        },
        orderStatus: {
          $ne: 'DRAFT',
        },
      },
      pagination: {
        page: pagination.pageIndex,
        pageSize: pagination.pageSize,
      },
      sort: ['createdAt'],
      populate: ['productOrders.product.thumbnail', 'productOrders.productVariant.attributes', 'address', 'user'],
    },
    {
      skip: !user,
      refetchOnMountOrArgChange: true,
    },
  );
  const loading = isLoading || isFetching;
  const tableData = data?.data ?? [];
  const columns = useMemo<ColumnDef<IOrder>[]>(
    () => [
      {
        header: 'No.',
        cell: ({ row }) => row.index + 1,
        meta: {
          align: 'center',
        },
      },
      {
        header: 'Products',
        accessorFn: (row) => row.productOrders.length,
        meta: {
          align: 'center',
        },
      },
      {
        header: 'Status',
        accessorKey: 'orderStatus',
        meta: {
          align: 'center',
        },
      },
      {
        header: 'Receiver',
        cell: ReceiverCell,
        meta: {
          align: 'center',
        },
      },
      {
        header: 'Price',
        accessorFn: (row) => formattedNumber(row.total),
        meta: {
          align: 'center',
        },
      },
    ],
    [],
  );

  return (
    <LoadingWrapper loading={loading}>
      <DataTable
        columns={columns}
        data={tableData}
        pagination={pagination}
        onPaginationChange={setPagination}
        showPagination
      />
    </LoadingWrapper>
  );
};

export default Order;
