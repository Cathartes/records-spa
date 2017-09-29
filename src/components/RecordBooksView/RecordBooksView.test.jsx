import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../helpers/storeTest';

import RecordBooksView from './RecordBooksView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <RecordBooksView />
    </Provider>,
    div
  );
});
