import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import apolloClient from '../../config/apolloClient';
import store from '../../config/store';

import ChallengesListContainer from './ChallengesListContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ApolloProvider client={apolloClient} store={store}>
      <ChallengesListContainer />
    </ApolloProvider>,
    div
  );
});
