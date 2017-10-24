import React from 'react';
import ReactDOM from 'react-dom';

import ChallengesList from './ChallengesList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const challenges = [];

  ReactDOM.render(<ChallengesList challenges={challenges} />, div);
});
