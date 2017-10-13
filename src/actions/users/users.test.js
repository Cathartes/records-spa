import {
  USERS_POST_ERROR,
  usersPostError,
  USERS_POST_REQUESTING,
  usersPostRequesting,
  USERS_POST_SUCCESS,
  usersPostSuccess
} from './users';

describe('users actions', () => {
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
