import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import store from '../../config/store';

import CompletionsAdd from './CompletionsAdd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = { currentUser: { admin: true }, data: { loading: true } };

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <CompletionsAdd {...props} />
      </Router>
    </Provider>,
    div
  );
});
