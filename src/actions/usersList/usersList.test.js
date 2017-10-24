import {
  USERS_LIST_SELECT_RESET,
  usersListSelectReset,
  USERS_LIST_SELECT_TOGGLE,
  usersListSelectToggle
} from './usersList';

describe('usersList actions', () => {
  it('should create usersListSelectReset', () => {
    const expectedAction = { type: USERS_LIST_SELECT_RESET };
    expect(usersListSelectReset()).toEqual(expectedAction);
  });

  it('should create usersListSelectToggle', () => {
    const userId = 1;
    const expectedAction = {
      type: USERS_LIST_SELECT_TOGGLE,
      userId
    };
    expect(usersListSelectToggle(userId)).toEqual(expectedAction);
  });
});
