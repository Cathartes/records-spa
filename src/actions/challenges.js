export const CHALLENGES_GET_ERROR   = 'CHALLENGES_GET_ERROR';
export const CHALLENGES_GET_SUCCESS = 'CHALLENGES_GET_SUCCESS';
export const CHALLENGES_LOADING     = 'CHALLENGES_LOADING';

export const challengesGetError = (isError) => {
  return {
    type: CHALLENGES_GET_ERROR,
    isError
  };
};

export const challengesGetSuccess = (challenges) => {
  return {
    type: CHALLENGES_GET_SUCCESS,
    challenges
  };
};

export const challengesLoading = (isLoading) => {
  return {
    type: CHALLENGES_LOADING,
    isLoading
  };
};

export const challengesGet = () => {
  return (dispatch) => {
    dispatch(challengesLoading(true));

    fetch(`${process.env.REACT_APP_API_URL}/v1/challenges`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(challengesLoading(false));

        return response.json();
      })
      .then((challenges) => dispatch(challengesGetSuccess(challenges.data)))
      .catch(() => dispatch(challengesGetError(true)));
  }
}
