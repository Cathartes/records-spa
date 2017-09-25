import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './helpers/localStorageTest';
import store from './helpers/storeTest';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
