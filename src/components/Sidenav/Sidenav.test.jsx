import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../helpers/storeTest';

import Sidenav from './Sidenav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Sidenav />
    </Provider>,
    div
  );
});
