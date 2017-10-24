import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../config/store';

import CompletionsEdit from './CompletionsEdit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const completion = {};
  const onRequestClose = () => {};
  const recordBookId = '0';

  ReactDOM.render(
    <Provider store={store}>
      <CompletionsEdit
        completion={completion}
        onRequestClose={onRequestClose}
        recordBookId={recordBookId}
      />
    </Provider>,
    div
  );
});
