import { callV1Api, expandIncludes, stringifyParams } from '../../helpers/api';

export const PARTICIPATIONS_LIST_ERROR = 'PARTICIPATIONS_LIST_ERROR';
export const PARTICIPATIONS_LIST_REQUESTING = 'PARTICIPATIONS_LIST_REQUESTING';
export const PARTICIPATIONS_LIST_SUCCESS = 'PARTICIPATIONS_LIST_SUCCESS';

export const participationsListError = isError => {
  return {
    type: PARTICIPATIONS_LIST_ERROR,
    isError
  };
};

export const participationsListRequesting = isRequesting => {
  return {
    type: PARTICIPATIONS_LIST_REQUESTING,
    isRequesting
  };
};

export const participationsListSuccess = participations => {
  return {
    type: PARTICIPATIONS_LIST_SUCCESS,
    participations
  };
};

export const participationsList = queryParams => {
  return dispatch => {
    dispatch(participationsListRequesting(true));

    const endpoint = 'participations' + stringifyParams(queryParams);
    callV1Api(endpoint, 'GET')
      .then(response => {
        if (!response.ok) {
          dispatch(participationsListError(true));
        }

        return response.json();
      })
      .then(jsonReponse => {
        expandIncludes(jsonReponse.data, jsonReponse.included);
        dispatch(participationsListSuccess(jsonReponse.data));
        dispatch(participationsListRequesting(false));
      });
  };
};
