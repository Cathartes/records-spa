import { LOGOUT_SUCCESS, SET_CURRENT_USER } from '../../actions/auth';

const initialState = {
  currentUser: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, { currentUser: null });
    case SET_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.user });
    default:
      return state;
  }
};

export default auth;
