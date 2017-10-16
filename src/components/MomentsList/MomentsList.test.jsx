import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import store from '../../config/store';

import MomentsList from './MomentsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = { data: { loading: false, moments: [] } };

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <MomentsList {...props} />
      </Router>
    </Provider>,
    div
  );
});
