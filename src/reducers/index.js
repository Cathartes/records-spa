import { combineReducers } from 'redux';

import auth from './auth';
import challenges from './challenges';
import recordBooks from './recordBooks';
import sidenav from './sidenav';
import snackbars from './snackbars';

const appReducers = combineReducers({
  auth,
  challenges,
  recordBooks,
  sidenav,
  snackbars
});

export default appReducers;
