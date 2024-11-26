import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoadComponent from './LoadComponent';
import { MainLayout } from '@/layouts';

const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about'));

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' Component={MainLayout}>
        <Route index element={<LoadComponent component={Home} />} />
        <Route path='/about' element={<LoadComponent component={About} />} />
      </Route>
    </Routes>
  );
};

export { AllRoutes };
