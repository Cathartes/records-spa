import { combineReducers } from 'redux';

import auth from './auth';
import challenges from './challenges';
import completions from './completions';
import moments from './moments';
import participations from './participations';
import recordBooks from './recordBooks';
import sidenav from './sidenav';
import snackbars from './snackbars';
import users from './users';

const appReducers = combineReducers({
  auth,
  challenges,
  completions,
  moments,
  participations,
  recordBooks,
  sidenav,
  snackbars,
  users
});

export default appReducers;
