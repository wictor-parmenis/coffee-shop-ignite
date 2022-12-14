import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ProductsProvider } from './contexts/productsContext';

import { Router } from './routes';
import { GlobalStyle } from './styles/global/styles';
import { defaultTheme } from './styles/themes/default';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <ProductsProvider>
        <Router />
      </ProductsProvider>
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
