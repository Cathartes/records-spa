import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

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
    <Provider store={store}>
      <RecordBooksView {...props} />
    </Provider>,
    div
  );
});
