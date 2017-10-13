import { callV1Api } from '../../helpers/api';

export const USERS_POST_ERROR = 'USERS_POST_ERROR';
export const USERS_POST_REQUESTING = 'USERS_POST_REQUESTING';
export const USERS_POST_SUCCESS = 'USERS_POST_SUCCESS';

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
