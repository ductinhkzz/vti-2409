import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoadComponent from './LoadComponent';
import { MainLayout } from '@/layouts';

const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about'));

/* Auth Page */
const Login = lazy(() => import('@/pages/auth/login'));
const LoginRedirect = lazy(() => import('@/pages/auth/redirect'));

const Collection = lazy(() => import('@/pages/collection'));

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' Component={MainLayout}>
        <Route index element={<LoadComponent component={Home} />} />
        <Route path='/login' element={<LoadComponent component={Login} />} />
        <Route path='/connect/:provider/redirect' element={<LoadComponent component={LoginRedirect} />} />
        <Route path='/about' element={<LoadComponent component={About} />} />
        <Route path='/collection/:slug' element={<LoadComponent component={Collection} />} />
      </Route>
    </Routes>
  );
};

export { AllRoutes };
