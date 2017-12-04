import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import registerServiceWorker from './registerServiceWorker';
import store from './config/store';
import apolloClient from './config/apolloClient';

import App from './components/App';

import 'typeface-roboto';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
