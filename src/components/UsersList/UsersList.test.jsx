import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import store from '../../config/store';

import UsersList from './UsersList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = { data: { loading: false, users: [] } };

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <UsersList {...props} />
      </Router>
    </Provider>,
    div
  );
});
