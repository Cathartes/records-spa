import { callV1Api } from '../../helpers/api';

export const USERS_GET_ERROR = 'USERS_GET_ERROR';
export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS';
export const USERS_GET_REQUESTING = 'USERS_GET_REQUESTING';

export const USERS_POST_ERROR = 'USERS_POST_ERROR';
export const USERS_POST_REQUESTING = 'USERS_POST_REQUESTING';
export const USERS_POST_SUCCESS = 'USERS_POST_SUCCESS';

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

export const usersPostError = isError => {
  return {
    type: USERS_POST_ERROR,
    isError
  };
};

export const usersPostRequesting = isRequesting => {
  return {
    type: USERS_POST_REQUESTING,
    isRequesting
  };
};

export const usersPostSuccess = user => {
  return {
    type: USERS_POST_SUCCESS,
    user
  };
};

export const usersPost = discordName => {
  return dispatch => {
    dispatch(usersPostRequesting(true));

    const body = {
      data: {
        attributes: {
          discord_name: discordName
        }
      }
    };

    callV1Api('users', 'POST', body)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(usersPostRequesting(false));

        return response.json();
      })
      .then(users => dispatch(usersPostSuccess(users.data)))
      .catch(() => dispatch(usersPostError(true)));
  };
};
