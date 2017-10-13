import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import store from '../../config/store';

import RecordBooksAdd from './RecordBooksAdd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = { currentUser: { admin: true } };

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <RecordBooksAdd {...props} />
      </Router>
    </Provider>,
    div
  );
});
