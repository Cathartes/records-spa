import '../../helpers/localStorageTest';

import {
  LOGIN_POST_ERROR,
  loginPostError,
  LOGIN_POST_REQUESTING,
  loginPostRequesting,
  LOGIN_POST_SUCCESS,
  loginPostSuccess,
  LOGOUT_DELETE_SUCCESS,
  logoutDeleteSuccess
} from './auth';

describe('auth actions', () => {
  it('should create loginPostError', () => {
    const isError = true;
    const expectedAction = {
      type: LOGIN_POST_ERROR,
      isError
    };
    expect(loginPostError(isError)).toEqual(expectedAction);
  });

  it('should create loginPostRequesting', () => {
    const isRequesting = true;
    const expectedAction = {
      type: LOGIN_POST_REQUESTING,
      isRequesting
    };
    expect(loginPostRequesting(isRequesting)).toEqual(expectedAction);
  });

  it('should create loginPostSuccess', () => {
    const user = [{ test: 'Fake User' }];
    const expectedAction = {
      type: LOGIN_POST_SUCCESS,
      user
    };
    expect(loginPostSuccess(user)).toEqual(expectedAction);
  });

  it('should create logoutDeleteSuccess', () => {
    const expectedAction = {
      type: LOGOUT_DELETE_SUCCESS
    };
    expect(logoutDeleteSuccess()).toEqual(expectedAction);
  });
});
