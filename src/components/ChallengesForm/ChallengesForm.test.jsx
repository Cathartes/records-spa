import React from 'react';
import ReactDOM from 'react-dom';

import ChallengesForm from './ChallengesForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onFormSubmit = () => {};
  const titleText = 'Test';

  ReactDOM.render(
    <ChallengesForm onFormSubmit={onFormSubmit} titleText={titleText} />,
    div
  );
});
