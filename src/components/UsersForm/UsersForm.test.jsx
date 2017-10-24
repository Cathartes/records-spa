import React from 'react';
import ReactDOM from 'react-dom';

import UsersForm from './UsersForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onFormSubmit = () => {};
  const titleText = 'Test';

  ReactDOM.render(
    <UsersForm onFormSubmit={onFormSubmit} titleText={titleText} />,
    div
  );
});
