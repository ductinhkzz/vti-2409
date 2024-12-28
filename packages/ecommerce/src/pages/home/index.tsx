import { Blocks, LoadingWrapper } from '@/components';
import { useGetSingleTypePageQuery } from '@/redux/global';

const Home = () => {
  const { data, isLoading, isFetching } = useGetSingleTypePageQuery('home');

  const loading = isLoading || isFetching;

  return (
    <LoadingWrapper loading={loading}>
      <Blocks blocks={data?.blocks} />
    </LoadingWrapper>
  );
};

export default Home;
