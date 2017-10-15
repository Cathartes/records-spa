import {
  USERS_LIST_SELECT_RESET,
  USERS_LIST_SELECT_TOGGLE
} from '../../actions/usersList';

const initialState = { selectedUsers: [] };

const usersList = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST_SELECT_RESET:
      return Object.assign({}, state, { selectedUsers: [] });

    case USERS_LIST_SELECT_TOGGLE:
      const newSelected = [...state.selectedUsers];
      const existingIndex = newSelected.indexOf(action.userId);

      if (existingIndex === -1) {
        newSelected.push(action.userId);
      } else {
        newSelected.splice(existingIndex, 1);
      }

      return Object.assign({}, state, { selectedUsers: newSelected });

    default:
      return state;
  }
};

export default usersList;
