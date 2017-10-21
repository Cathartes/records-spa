import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../config/store';

import UsersEdit from './UsersEdit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onRequestClose = () => {};
  const user = {};

  ReactDOM.render(
    <Provider store={store}>
      <UsersEdit onRequestClose={onRequestClose} user={user} />
    </Provider>,
    div
  );
});
