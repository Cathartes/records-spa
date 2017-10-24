import {
  LOGIN_SUCCESS,
  loginSuccess,
  LOGOUT_SUCCESS,
  logoutSuccess,
  SET_CURRENT_USER,
  setCurrentUser
} from './auth';

describe('auth actions', () => {
  it('should create loginSuccess', () => {
    const token = 'Fake Token';
    const uid = 'Fake UID';
    const expectedAction = {
      type: LOGIN_SUCCESS,
      token,
      uid
    };
    expect(loginSuccess(token, uid)).toEqual(expectedAction);
  });

  it('should create logoutSuccess', () => {
    const expectedAction = {
      type: LOGOUT_SUCCESS
    };
    expect(logoutSuccess()).toEqual(expectedAction);
  });

  it('should create setCurrentUser', () => {
    const user = { test: 'Fake User' };
    const expectedAction = {
      type: SET_CURRENT_USER,
      user
    };
    expect(setCurrentUser(user)).toEqual(expectedAction);
  });
});
