import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import '../../helpers/localStorageTest';
import store from '../../helpers/storeTest';

import Logout from './Logout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Logout />
      </Router>
    </Provider>,
    div
  );
});
