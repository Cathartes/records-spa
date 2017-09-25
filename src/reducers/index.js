import { combineReducers } from 'redux';

import auth from './auth';
import challenges from './challenges';
import sidenav from './sidenav';
import snackbars from './snackbars';

const appReducers = combineReducers({
  auth,
  challenges,
  sidenav,
  snackbars
});

export default appReducers;
