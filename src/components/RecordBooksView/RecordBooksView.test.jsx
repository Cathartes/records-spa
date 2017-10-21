import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import apolloClient from '../../config/apolloClient';
import store from '../../config/store';

import RecordBooksView from './RecordBooksView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    currentTab: 2,
    data: { loading: false, recordBook: {} },
    match: { params: {} }
  };

  ReactDOM.render(
    <ApolloProvider client={apolloClient} store={store}>
      <RecordBooksView {...props} />
    </ApolloProvider>,
    div
  );
});
