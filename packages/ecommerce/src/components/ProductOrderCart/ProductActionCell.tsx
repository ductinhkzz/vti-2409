import { Trash } from 'lucide-react';
import { CellContext } from '@tanstack/react-table';

import { IProductOrder } from '@/redux/order';
import { IconButton } from '../IconButton';
import { useCart } from '@/hooks';

const ProductActionCell = ({
  row: {
    original: { documentId },
  },
}: CellContext<IProductOrder, unknown>) => {
  const { handleDeleteProductOrder } = useCart();

  return (
    <div className='flex items-center gap-2'>
      <IconButton title='Delete' onClick={() => handleDeleteProductOrder(documentId)}>
        <Trash />
      </IconButton>
    </div>
  );
};

export default ProductActionCell;
