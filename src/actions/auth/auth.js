export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const loginSuccess = (token, uid) => {
  return {
    type: LOGIN_SUCCESS,
    token,
    uid
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};
