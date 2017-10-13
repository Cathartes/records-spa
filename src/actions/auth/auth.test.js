import {
  LOGIN_SUCCESS,
  loginSuccess,
  LOGOUT_SUCCESS,
  logoutSuccess,
  SET_CURRENT_USER,
  setCurrentUser
} from './auth';

require('../../config/localStorageTest');

describe('auth actions', () => {
  it('should create loginSuccess', () => {
    const expectedAction = {
      type: LOGIN_SUCCESS
    };
    expect(loginSuccess()).toEqual(expectedAction);
  });

  it('should create logoutSuccess', () => {
    const expectedAction = {
      type: LOGOUT_SUCCESS
    };
    expect(logoutSuccess()).toEqual(expectedAction);
  });

  it('should create setCurrentUser', () => {
    const expectedAction = {
      type: SET_CURRENT_USER
    };
    expect(setCurrentUser()).toEqual(expectedAction);
  });
});
