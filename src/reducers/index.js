import { combineReducers } from 'redux';

import auth from './auth';
import challenges from './challenges';
import recordBooks from './recordBooks';
import sidenav from './sidenav';
import snackbars from './snackbars';
import users from './users';

const appReducers = combineReducers({
  auth,
  challenges,
  recordBooks,
  sidenav,
  snackbars,
  users
});

export default appReducers;
