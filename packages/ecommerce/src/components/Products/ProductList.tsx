import { IProduct } from '@/redux/types';
import ProductItem from './ProductItem';

type Props = {
  products?: IProduct[];
};

const ProductList = ({ products = [] }: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export { ProductList };
