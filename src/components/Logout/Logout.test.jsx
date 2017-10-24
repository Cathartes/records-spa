import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import store from '../../config/store';

import Logout from './Logout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = { logoutSuccess: () => {}, snackbarAdd: () => {} };

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Logout {...props} />
      </Router>
    </Provider>,
    div
  );
});
