import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import store from '../../config/store';

import CompletionsList from './CompletionsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = { data: { loading: false, completions: [] } };

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <CompletionsList {...props} />
      </Router>
    </Provider>,
    div
  );
});
