import {
  LOGIN_POST_REQUESTING,
  LOGIN_POST_SUCCESS,
  LOGOUT_DELETE
} from '../actions/auth';

const initialState = {
  currentUser: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_POST_REQUESTING:
      return Object.assign({}, state, {
        loginPostRequesting: action.isRequesting
      });
    case LOGIN_POST_SUCCESS:
      return Object.assign({}, state, { currentUser: action.user });
    case LOGOUT_DELETE:
      return Object.assign({}, state, { currentUser: null });
    default:
      return state;
  }
};

export default auth;
