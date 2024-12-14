import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { LoadingOverlay } from '@/components';

const LoginRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { provider } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/auth/${provider}/callback${location.search}`)
      .then((res) => {
        if (res.status !== 200) {
          navigate('/');
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem('username', res.user.username);
        setTimeout(() => navigate('/'), 3000); // Redirect to homepage after 3 sec
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location.search, navigate, provider]);

  return <LoadingOverlay />;
};

export default LoginRedirect;
