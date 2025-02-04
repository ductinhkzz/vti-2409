import { CellContext } from '@tanstack/react-table';

import { IProductOrder } from '@/redux/order';
import { useCart } from '@/hooks';
import { Input } from '../ui';
import { ChangeEvent } from 'react';

const ProductAmountCell = ({
  row: {
    original: { documentId, amount },
  },
}: CellContext<IProductOrder, unknown>) => {
  const { handleUpdateProductOrder, isLoading } = useCart();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    handleUpdateProductOrder(documentId, Number(value));
  };

  return (
    <Input type='number' min={0} defaultValue={amount} className='w-16' onChange={onChange} disabled={isLoading} />
  );
};

export default ProductAmountCell;
