import { useParams } from 'react-router-dom';

import { useGetProductQuery } from '@/redux/product';
import { Banner, Images, ProductInfo, SelectVariants } from './components';
import { LoadingWrapper } from '@/components';

const Product = () => {
  const { id = '' } = useParams();
  const { data, isLoading, isFetching } = useGetProductQuery(id, {
    skip: !id,
    refetchOnMountOrArgChange: true,
  });

  return (
    <LoadingWrapper loading={isLoading || isFetching}>
      <Banner data={data?.banner} />
      <Images images={data?.images} />
      <SelectVariants {...data} />
      <ProductInfo {...data} />
    </LoadingWrapper>
  );
};

export default Product;
