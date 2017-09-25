import { LOGIN_POST_REQUESTING, LOGIN_POST_SUCCESS } from '../../actions/auth';

import reducer from './auth';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      currentUser: null
    });
  });

  it('should handle LOGIN_POST_REQUESTING', () => {
    const isRequesting = true;
    expect(
      reducer({}, { type: LOGIN_POST_REQUESTING, isRequesting: isRequesting })
    ).toEqual({ loginPostRequesting: true });
  });

  it('should handle LOGIN_POST_SUCCESS', () => {
    const user = { test: 'Fake User' };
    expect(reducer({}, { type: LOGIN_POST_SUCCESS, user: user })).toEqual({
      currentUser: user
    });
  });
});
