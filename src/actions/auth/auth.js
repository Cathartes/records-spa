export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const loginSuccess = (token, uid) => {
  localStorage.setItem('X-USER-TOKEN', token);
  localStorage.setItem('X-USER-UID', uid);

  return {
    type: LOGIN_SUCCESS
  };
};

export const logoutSuccess = () => {
  localStorage.removeItem('X-USER-TOKEN');
  localStorage.removeItem('X-USER-UID');

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
