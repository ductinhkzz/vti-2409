import { BrowserRouter } from 'react-router-dom';

import { AllRoutes } from './routes';
import { ThemeProvider } from './providers';

function App() {
  return (
    <ThemeProvider defaultTheme='light'>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
