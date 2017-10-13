import { USERS_POST_REQUESTING, USERS_POST_SUCCESS } from '../../actions/users';

const initialState = { users: [], usersGetRequesting: false };

const users = (state = initialState, action) => {
  switch (action.type) {
    case USERS_POST_REQUESTING:
      return Object.assign({}, state, {
        usersPostRequesting: action.isRequesting
      });
    case USERS_POST_SUCCESS:
      return Object.assign({}, state, {
        users: [...state.users, action.user]
      });

    default:
      return state;
  }
};

export default users;
