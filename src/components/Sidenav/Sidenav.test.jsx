import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import store from '../../config/store';

import Sidenav from './Sidenav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = { data: { loading: false, recordBooks: [] } };

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Sidenav {...props} />
      </Router>
    </Provider>,
    div
  );
});
