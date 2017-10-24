import React from 'react';
import ReactDOM from 'react-dom';

import CompletionsForm from './CompletionsForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onFormSubmit = () => {};
  const titleText = 'Test';

  ReactDOM.render(
    <CompletionsForm onFormSubmit={onFormSubmit} titleText={titleText} />,
    div
  );
});
