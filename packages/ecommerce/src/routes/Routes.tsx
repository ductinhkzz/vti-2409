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
const Category = lazy(() => import('@/pages/category'));
const Product = lazy(() => import('@/pages/product'));

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' Component={MainLayout}>
        <Route index element={<LoadComponent component={Home} />} />
        <Route path='/login' element={<LoadComponent component={Login} />} />
        <Route path='/connect/:provider/redirect' element={<LoadComponent component={LoginRedirect} />} />
        <Route path='/about' element={<LoadComponent component={About} />} />
        <Route path='/collection/:id' element={<LoadComponent component={Collection} />} />
        <Route path='/category/:id' element={<LoadComponent component={Category} />} />
        <Route path='/products/:id' element={<LoadComponent component={Product} />} />
      </Route>
    </Routes>
  );
};

export { AllRoutes };
