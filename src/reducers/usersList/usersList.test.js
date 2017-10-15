import {
  USERS_LIST_SELECT_RESET,
  USERS_LIST_SELECT_TOGGLE
} from '../../actions/usersList';

import reducer from './usersList';

describe('usersList reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ selectedUsers: [] });
  });

  it('should handle USERS_LIST_SELECT_RESET', () => {
    expect(reducer({}, { type: USERS_LIST_SELECT_RESET })).toEqual({
      selectedUsers: []
    });
  });

  it('should handle USERS_LIST_SELECT_TOGGLE', () => {
    const userId = 1;

    expect(
      reducer(
        { selectedUsers: [] },
        {
          type: USERS_LIST_SELECT_TOGGLE,
          userId
        }
      )
    ).toEqual({ selectedUsers: [1] });
  });
});
