import { combineReducers } from 'redux';

import client from '../config/apolloClient';

import auth from './auth';
import snackbars from './snackbars';
import ui from './ui';
import usersList from './usersList';

const appReducers = combineReducers({
  apollo: client.reducer(),
  auth,
  snackbars,
  ui,
  usersList
});

export default appReducers;
