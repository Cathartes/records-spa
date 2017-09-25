import { callV1Api } from '../../helpers/api';

export const CHALLENGES_GET_ERROR = 'CHALLENGES_GET_ERROR';
export const CHALLENGES_GET_SUCCESS = 'CHALLENGES_GET_SUCCESS';
export const CHALLENGES_GET_REQUESTING = 'CHALLENGES_GET_REQUESTING';

export const challengesGetError = isError => {
  return {
    type: CHALLENGES_GET_ERROR,
    isError
  };
};

export const challengesGetSuccess = challenges => {
  return {
    type: CHALLENGES_GET_SUCCESS,
    challenges
  };
};

export const challengesGetRequesting = isRequesting => {
  return {
    type: CHALLENGES_GET_REQUESTING,
    isRequesting
  };
};

export const challengesGet = () => {
  return dispatch => {
    dispatch(challengesGetRequesting(true));

    callV1Api('challenges', 'GET')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(challengesGetRequesting(false));

        return response.json();
      })
      .then(challenges => dispatch(challengesGetSuccess(challenges.data)))
      .catch(() => dispatch(challengesGetError(true)));
  };
};
