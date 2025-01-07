import { ComponentType, FC } from 'react';

import { useGetMeQuery } from '@/redux/auth';
import { useUser } from '@/hooks';
import { LoadingWrapper } from '@/components';

const withLogin = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
  const WithLogin: React.FC<P> = (props) => {
    const { jwt } = useUser();

    const { isLoading, isFetching } = useGetMeQuery(undefined, {
      refetchOnMountOrArgChange: true,
      skip: !jwt,
    });

    return (
      <LoadingWrapper loading={isLoading || isFetching}>
        <WrappedComponent {...props} />
      </LoadingWrapper>
    );
  };

  return WithLogin;
};

export { withLogin };
