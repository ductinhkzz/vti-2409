import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoadComponent from './LoadComponent';
import { MainLayout, ProfileLayout } from '@/layouts';
import { withLogin } from '@/HOCs';

const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about'));

/* Auth Page */
const Login = lazy(() => import('@/pages/auth/login'));
const Register = lazy(() => import('@/pages/auth/register'));
const LoginRedirect = lazy(() => import('@/pages/auth/redirect'));
const ForgotPassword = lazy(() => import('@/pages/auth/forgot-password'));
const EmailConfirm = lazy(() => import('@/pages/auth/email-confirm'));
const Profile = lazy(() => import('@/pages/auth/profile'));
const ShippingAddress = lazy(() => import('@/pages/auth/profile/shipping-address'));
const Order = lazy(() => import('@/pages/auth/profile/order'));

const Collection = lazy(() => import('@/pages/collection'));
const Category = lazy(() => import('@/pages/category'));
const Product = lazy(() => import('@/pages/product'));

const NotFound = lazy(() => import('@/pages/NotFound'));

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' Component={withLogin(MainLayout)}>
        <Route index element={<LoadComponent component={Home} />} />
        <Route path='/login' element={<LoadComponent component={Login} />} />
        <Route path='/register' element={<LoadComponent component={Register} />} />
        <Route path='/forgot-password' element={<LoadComponent component={ForgotPassword} />} />
        <Route path='/email-confirm' element={<LoadComponent component={EmailConfirm} />} />
        <Route path='/connect/:provider/redirect' element={<LoadComponent component={LoginRedirect} />} />
        <Route path='/about' element={<LoadComponent component={About} />} />
        <Route path='/collection/:id' element={<LoadComponent component={Collection} />} />
        <Route path='/category/:id' element={<LoadComponent component={Category} />} />
        <Route path='/products/:id' element={<LoadComponent component={Product} />} />
        <Route element={<ProfileLayout />}>
          <Route path='/profile' element={<LoadComponent component={Profile} />} />
          <Route path='/shipping-address' element={<LoadComponent component={ShippingAddress} />} />
          <Route path='/order' element={<LoadComponent component={Order} />} />
        </Route>
        <Route path='*' element={<LoadComponent component={NotFound} />} />
      </Route>
    </Routes>
  );
};

export { AllRoutes };
