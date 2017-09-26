import { callV1Api } from '../../helpers/api';

export const USERS_GET_ERROR = 'USERS_GET_ERROR';
export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS';
export const USERS_GET_REQUESTING = 'USERS_GET_REQUESTING';

export const usersGetError = isError => {
  return {
    type: USERS_GET_ERROR,
    isError
  };
};

export const usersGetSuccess = users => {
  return {
    type: USERS_GET_SUCCESS,
    users
  };
};

export const usersGetRequesting = isRequesting => {
  return {
    type: USERS_GET_REQUESTING,
    isRequesting
  };
};

export const usersGet = () => {
  return dispatch => {
    dispatch(usersGetRequesting(true));

    callV1Api('users', 'GET')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(usersGetRequesting(false));

        return response.json();
      })
      .then(users => dispatch(usersGetSuccess(users.data)))
      .catch(() => dispatch(usersGetError(true)));
  };
};
