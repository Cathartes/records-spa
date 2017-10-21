import React from 'react';
import ReactDOM from 'react-dom';

import UsersForm from './UsersForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onFormSubmit = () => {};

  ReactDOM.render(<UsersForm onFormSubmit={onFormSubmit} />, div);
});
