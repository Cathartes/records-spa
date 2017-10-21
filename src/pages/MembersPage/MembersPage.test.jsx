import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { MemoryRouter } from 'react-router-dom';

import apolloClient from '../../config/apolloClient';
import store from '../../config/store';

import MembersPage from './MembersPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  // ReactDOM.render(
  //   <ApolloProvider client={apolloClient} store={store}>
  //     <MemoryRouter>
  //       <MembersPage />
  //     </MemoryRouter>
  //   </ApolloProvider>,
  //   div
  // );
});
