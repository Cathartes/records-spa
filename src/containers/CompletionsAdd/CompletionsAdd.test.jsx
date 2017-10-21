import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../config/store';

import CompletionsAdd from './CompletionsAdd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onRequestClose = () => {};
  const recordBookId = '0';

  ReactDOM.render(
    <Provider store={store}>
      <CompletionsAdd
        onRequestClose={onRequestClose}
        recordBookId={recordBookId}
      />
    </Provider>,
    div
  );
});
