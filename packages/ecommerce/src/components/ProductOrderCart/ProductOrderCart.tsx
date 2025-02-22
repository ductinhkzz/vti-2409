import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { IProductOrder } from '@/redux/order';
import { DataTable } from '../DataTable';
import ProductCell from './ProductCell';
import ProductVariantCell from './ProductVariantCell';
import { formattedNumber } from '@/utils';
import ProductActionCell from './ProductActionCell';
import ProductAmountCell from './ProductAmountCell';

type Props = {
  productOrders?: IProductOrder[];
};

const ProductOrderCart = ({ productOrders = [] }: Props) => {
  const columns = useMemo<ColumnDef<IProductOrder>[]>(
    () => [
      {
        header: 'No.',
        cell: ({ row }) => row.index + 1,
        meta: {
          align: 'center',
        },
      },
      {
        header: 'Product',
        cell: ProductCell,
        meta: {
          className: 'w-36',
        },
      },
      {
        header: 'Attributes',
        cell: ProductVariantCell,
      },
      {
        header: 'Amount',
        cell: ProductAmountCell,
        meta: {
          align: 'center',
        },
      },
      {
        header: 'Price',
        accessorFn: (row) => formattedNumber(row.productVariant.price),
        meta: {
          align: 'center',
        },
      },
      {
        header: 'Action',
        cell: ProductActionCell,
      },
    ],
    [],
  );

  return <DataTable columns={columns} data={productOrders} />;
};

export { ProductOrderCart };
