import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import store from '../../helpers/storeTest';

import AddRecordBook from './AddRecordBook';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <AddRecordBook />
      </Router>
    </Provider>,
    div
  );
});
