import { useParams } from 'react-router-dom';

import { Blocks, LoadingWrapper, ProductList } from '@/components';
import { useGetCollectionQuery } from '@/redux/global';

const Collection = () => {
  const { id = '' } = useParams();

  const { data, isLoading, isFetching } = useGetCollectionQuery(id, {
    skip: !id,
    refetchOnMountOrArgChange: true,
  });

  return (
    <LoadingWrapper loading={isLoading || isFetching}>
      <div>
        <Blocks blocks={data?.topBlocks} />
        {data?.products.length && (
          <section className='flex justify-center my-12 lg:my-24'>
            <div className='max-w-5xl w-full'>
              <ProductList products={data?.products} />
            </div>
          </section>
        )}
        <Blocks blocks={data?.bottomBlocks} />
      </div>
    </LoadingWrapper>
  );
};

export default Collection;
