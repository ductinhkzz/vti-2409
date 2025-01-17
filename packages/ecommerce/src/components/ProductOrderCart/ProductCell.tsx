import { IProductOrder } from '@/redux/order';
import { CellContext } from '@tanstack/react-table';

import { Avatar, AvatarFallback, AvatarImage } from '../ui';
import { getMediaUrl } from '@/utils';

const ProductCell = ({
  row: {
    original: { product },
  },
}: CellContext<IProductOrder, unknown>) => {
  return (
    <div className='flex items-center gap-2'>
      <Avatar className='rounded-sm'>
        <AvatarImage src={getMediaUrl(product.thumbnail?.url)} />
        <AvatarFallback>{product.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <p>{product.name}</p>
    </div>
  );
};

export default ProductCell;
