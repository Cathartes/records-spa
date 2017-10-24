import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import store from '../../config/store';

import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = { snackbars: [] };

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Header {...props} />
      </Router>
    </Provider>,
    div
  );
});
