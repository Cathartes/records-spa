import { combineReducers } from 'redux';

import client from '../config/apolloClient';

import auth from './auth';
import recordBooks from './recordBooks';
import sidenav from './sidenav';
import snackbars from './snackbars';
import usersList from './usersList';

const appReducers = combineReducers({
  apollo: client.reducer(),
  auth,
  recordBooks,
  sidenav,
  snackbars,
  usersList
});

export default appReducers;
