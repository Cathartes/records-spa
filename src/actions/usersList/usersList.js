export const USERS_LIST_SELECT_RESET = 'USERS_LIST_SELECT_RESET';
export const USERS_LIST_SELECT_TOGGLE = 'USERS_LIST_SELECT_TOGGLE';

export const usersListSelectReset = () => {
  return { type: USERS_LIST_SELECT_RESET };
};

export const usersListSelectToggle = userId => {
  return {
    type: USERS_LIST_SELECT_TOGGLE,
    userId
  };
};
