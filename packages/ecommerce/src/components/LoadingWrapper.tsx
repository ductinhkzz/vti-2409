import { ReactNode, FC } from 'react';
import { LoadingOverlay } from './LoadingOverlay';

type Props = {
  children?: JSX.Element | ReactNode;
  loading?: boolean;
};

const LoadingWrapper: FC<Props> = ({ loading, children }) => {
  return (
    <>
      {loading && <LoadingOverlay />}
      {children}
    </>
  );
};

export { LoadingWrapper };
