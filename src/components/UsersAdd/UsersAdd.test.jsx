import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import store from '../../helpers/storeTest';

import UsersAdd from './UsersAdd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <UsersAdd />
      </Router>
    </Provider>,
    div
  );
});
