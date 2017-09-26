import { USERS_GET_SUCCESS } from '../../actions/users';

import reducer from './users';

describe('users reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      users: [],
      usersGetRequesting: false
    });
  });

  it('should handle USERS_GET_SUCCESS', () => {
    const users = [{ test: 'Fake User' }];
    expect(
      reducer(
        {},
        {
          type: USERS_GET_SUCCESS,
          users: users
        }
      )
    ).toEqual({ users: users });
  });
});
