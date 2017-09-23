import { combineReducers } from 'redux';

import challenges from './challenges';

const appReducers = combineReducers({
  challenges
});

export default appReducers;
