import { combineReducers } from 'redux';

import auth from './auth';
import snackbars from './snackbars';
import ui from './ui';
import usersList from './usersList';

const appReducers = combineReducers({
  auth,
  snackbars,
  ui,
  usersList
});

export default appReducers;
