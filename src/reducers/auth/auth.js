import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_CURRENT_USER
} from '../../actions/auth';

const initialState = {
  currentUser: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('X-USER-TOKEN', action.token);
      localStorage.setItem('X-USER-UID', action.uid);
      return state;

    case LOGOUT_SUCCESS:
      localStorage.removeItem('X-USER-TOKEN');
      localStorage.removeItem('X-USER-UID');
      return Object.assign({}, state, { currentUser: null });

    case SET_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.user });

    default:
      return state;
  }
};

export default auth;
