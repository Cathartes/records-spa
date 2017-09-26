import {
  USERS_GET_ERROR,
  usersGetError,
  USERS_GET_REQUESTING,
  usersGetRequesting,
  USERS_GET_SUCCESS,
  usersGetSuccess
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
});
