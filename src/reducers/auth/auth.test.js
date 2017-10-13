import { LOGIN_SUCCESS } from '../../actions/auth';

import reducer from './auth';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      currentUser: null
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    const user = { test: 'Fake User' };
    expect(reducer({}, { type: LOGIN_SUCCESS, user: user })).toEqual({
      currentUser: user
    });
  });
});
