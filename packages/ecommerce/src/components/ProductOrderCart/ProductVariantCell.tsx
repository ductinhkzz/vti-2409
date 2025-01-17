import { IProductOrder } from '@/redux/order';
import { CellContext } from '@tanstack/react-table';

import { Badge } from '../ui';

const ProductVariantCell = ({
  row: {
    original: {
      productVariant: { attributes },
    },
  },
}: CellContext<IProductOrder, unknown>) => {
  return (
    <div className='flex items-center gap-2 flex-wrap'>
      {attributes.map((att) => (
        <Badge key={att.documentId}>{att.name}</Badge>
      ))}
    </div>
  );
};

export default ProductVariantCell;
