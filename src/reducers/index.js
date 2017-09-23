import { combineReducers } from 'redux';

import challenges from './challenges';
import sideNav from './sideNav';

const appReducers = combineReducers({
  challenges,
  sideNav
});

export default appReducers;
