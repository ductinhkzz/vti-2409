import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AllRoutes } from './routes';
import { Toaster } from './components';
import { useRedux } from './hooks';
import { useGetCollectionsQuery } from './redux/global';

function App() {
  const { appSelector } = useRedux();
  const { theme } = appSelector((state) => state.global);
  useGetCollectionsQuery();

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    root.classList.add(theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <AllRoutes />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
