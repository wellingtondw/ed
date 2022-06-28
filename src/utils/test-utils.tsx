import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { Router } from 'react-router-dom';

const memoryHistory = createMemoryHistory();

const customRender = (
  ui: ReactElement,
  history = memoryHistory,
  { ...renderOptions }: RenderOptions = {}
) =>
  render(
    <Router navigator={history} location={history.location}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </Router>,
    renderOptions
  );

export * from '@testing-library/react';
export { customRender as render };
