import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { LoadingOverlay } from '@/components';
import { useLoginProviderQuery } from '@/redux/auth';
import { useToast } from '@/hooks';

const LoginRedirect = () => {
  const location = useLocation();
  const { provider = '' } = useParams();
  const { toast } = useToast();

  const { isSuccess, isError, error } = useLoginProviderQuery({
    provider,
    search: location.search,
  });

  useEffect(() => {
    if (isError) {
      toast({ variant: 'error', title: 'Login', description: (error as any).data.error.message });
    }
  }, [error, isError, toast]);

  if (isSuccess || isError) {
    return <Navigate to='/' />;
  }

  return <LoadingOverlay />;
};

export default LoginRedirect;
