import { LOGIN_POST_SUCCESS } from '../actions/auth';

const initialState = {
  currentUser: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_POST_SUCCESS:
      return Object.assign({}, state, { currentUser: action.user });
    default:
      return state;
  }
};

export default auth;
