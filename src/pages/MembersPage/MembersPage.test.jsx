import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { MemoryRouter as Router } from 'react-router-dom';

import apolloClient from '../../config/apolloClient';
import store from '../../config/store';

import MembersPage from './MembersPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ApolloProvider client={apolloClient} store={store}>
      <Router>
        <MembersPage />
      </Router>
    </ApolloProvider>,
    div
  );
});
