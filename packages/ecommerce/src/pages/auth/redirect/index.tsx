import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { LoadingOverlay } from '@/components';
import { api } from '@/lib';
import { JWT_STORAGE_KEY, USER_STORAGE_KEY } from '@/constants';

const LoginRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { provider } = useParams();

  useEffect(() => {
    api
      .get(`/auth/${provider}/callback${location.search}`)
      .then((res) => {
        localStorage.setItem(JWT_STORAGE_KEY, res.data.jwt);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(res.data.user));
        setTimeout(() => navigate('/'), 3000); // Redirect to homepage after 3 sec
      })
      .catch(() => {
        navigate('/');
      });
  }, [location.search, navigate, provider]);

  return <LoadingOverlay />;
};

export default LoginRedirect;
