import { Provider } from 'react-redux';

import store from './store';

import { Home } from './pages/Home';

export const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
