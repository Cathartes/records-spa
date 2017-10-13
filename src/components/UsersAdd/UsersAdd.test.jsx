import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import store from '../../config/store';

import UsersAdd from './UsersAdd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = { currentUser: { admin: true } };

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <UsersAdd {...props} />
      </Router>
    </Provider>,
    div
  );
});
