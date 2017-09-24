import { combineReducers } from 'redux';

import auth from './auth';
import challenges from './challenges';
import sideNav from './sideNav';
import snackbars from './snackbars';

const appReducers = combineReducers({
  auth,
  challenges,
  sideNav,
  snackbars
});

export default appReducers;
