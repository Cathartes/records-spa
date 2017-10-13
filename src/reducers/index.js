import { combineReducers } from 'redux';

import client from '../config/apolloClient';

import auth from './auth';
import recordBooks from './recordBooks';
import sidenav from './sidenav';
import snackbars from './snackbars';
import users from './users';

const appReducers = combineReducers({
  apollo: client.reducer(),
  auth,
  recordBooks,
  sidenav,
  snackbars,
  users
});

export default appReducers;
