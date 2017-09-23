import { combineReducers } from 'redux';

import auth from './auth';
import challenges from './challenges';
import sideNav from './sideNav';

const appReducers = combineReducers({
  auth,
  challenges,
  sideNav
});

export default appReducers;
