import { LOGOUT_SUCCESS, SET_CURRENT_USER } from '../../actions/auth';

import reducer from './auth';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      currentUser: null
    });
  });

  it('should handle LOGOUT_SUCCESS', () => {
    expect(reducer({}, { type: LOGOUT_SUCCESS })).toEqual({
      currentUser: null
    });
  });

  it('should handle SET_CURRENT_USER', () => {
    const user = { test: 'Fake User' };
    expect(reducer({}, { type: SET_CURRENT_USER, user: user })).toEqual({
      currentUser: user
    });
  });
});
