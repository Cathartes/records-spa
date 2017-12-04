import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import store from '../../config/store';
import apolloClient from '../../config/apolloClient';

import RecordBooksView from './RecordBooksView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    currentTab: 2,
    data: { loading: false, recordBook: {} },
    match: { params: {} }
  };

  ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <RecordBooksView {...props} />
      </ApolloProvider>
    </Provider>,
    div
  );
});
