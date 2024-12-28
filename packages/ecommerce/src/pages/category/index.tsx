import { Blocks, LoadingWrapper } from '@/components';
import { useGetCategoryQuery } from '@/redux/global';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { id = '' } = useParams();

  const { data, isLoading, isFetching } = useGetCategoryQuery(id, {
    skip: !id,
    refetchOnMountOrArgChange: true,
  });

  return (
    <LoadingWrapper loading={isLoading || isFetching}>
      <div>
        <Blocks blocks={data?.topBlocks} />
        <Blocks blocks={data?.bottomBlocks} />
      </div>
    </LoadingWrapper>
  );
};

export default Category;
