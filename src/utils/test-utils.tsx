import { createStore } from 'redux';
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import rootReducer from '../store/modules/rootReducer';

const memoryHistory = createMemoryHistory();

const customRender = (
  ui: ReactElement,
  initialState = {},
  store = createStore(rootReducer, initialState),
  history = memoryHistory,
  { ...renderOptions }: RenderOptions = {}
) =>
  render(
    <Provider store={store}>
      <Router navigator={history} location={history.location}>
        <ThemeProvider theme={theme}>{ui}</ThemeProvider>
      </Router>
    </Provider>,
    renderOptions
  );

export * from '@testing-library/react';
export { customRender as render };
