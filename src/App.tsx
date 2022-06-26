import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import { Routes } from './routes';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};
