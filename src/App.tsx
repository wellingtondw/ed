import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import store from './store';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes />
        </Provider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
};
