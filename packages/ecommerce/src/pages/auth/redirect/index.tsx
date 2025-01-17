import { Navigate, useLocation, useParams } from 'react-router-dom';

import { LoadingOverlay } from '@/components';
import { useLoginProviderQuery } from '@/redux/auth';

const LoginRedirect = () => {
  const location = useLocation();
  const { provider = '' } = useParams();

  const { isSuccess, isError } = useLoginProviderQuery({
    provider,
    search: location.search,
  });

  if (isSuccess) {
    return <Navigate to='/' />;
  }

  if (isError) {
    return <Navigate to='/login' />;
  }

  return <LoadingOverlay />;
};

export default LoginRedirect;
