import {
  USERS_GET_ERROR,
  usersGetError,
  USERS_GET_REQUESTING,
  usersGetRequesting,
  USERS_GET_SUCCESS,
  usersGetSuccess,
  USERS_POST_ERROR,
  usersPostError,
  USERS_POST_REQUESTING,
  usersPostRequesting,
  USERS_POST_SUCCESS,
  usersPostSuccess
} from './users';

describe('users actions', () => {
  it('should create usersGetError', () => {
    const isError = true;
    const expectedAction = {
      type: USERS_GET_ERROR,
      isError
    };
    expect(usersGetError(isError)).toEqual(expectedAction);
  });

  it('should create usersGetRequesting', () => {
    const isRequesting = true;
    const expectedAction = {
      type: USERS_GET_REQUESTING,
      isRequesting
    };
    expect(usersGetRequesting(isRequesting)).toEqual(expectedAction);
  });

  it('should create usersGetSuccess', () => {
    const users = [{ test: 'Fake User' }];
    const expectedAction = {
      type: USERS_GET_SUCCESS,
      users
    };
    expect(usersGetSuccess(users)).toEqual(expectedAction);
  });

  it('should create usersPostError', () => {
    const isError = true;
    const expectedAction = {
      type: USERS_POST_ERROR,
      isError
    };
    expect(usersPostError(isError)).toEqual(expectedAction);
  });

  it('should create usersPostRequesting', () => {
    const isRequesting = true;
    const expectedAction = {
      type: USERS_POST_REQUESTING,
      isRequesting
    };
    expect(usersPostRequesting(isRequesting)).toEqual(expectedAction);
  });

  it('should create usersPostSuccess', () => {
    const user = { test: 'Fake User' };
    const expectedAction = {
      type: USERS_POST_SUCCESS,
      user
    };
    expect(usersPostSuccess(user)).toEqual(expectedAction);
  });
});
