import { callV1Api, expandIncludes, stringifyParams } from '../../helpers/api';

export const MOMENTS_LIST_ERROR = 'MOMENTS_LIST_ERROR';
export const MOMENTS_LIST_REQUESTING = 'MOMENTS_LIST_REQUESTING';
export const MOMENTS_LIST_SUCCESS = 'MOMENTS_LIST_SUCCESS';

export const momentsListError = isError => {
  return {
    type: MOMENTS_LIST_ERROR,
    isError
  };
};

export const momentsListRequesting = isRequesting => {
  return {
    type: MOMENTS_LIST_REQUESTING,
    isRequesting
  };
};

export const momentsListSuccess = moments => {
  return {
    type: MOMENTS_LIST_SUCCESS,
    moments
  };
};

export const momentsList = queryParams => {
  return dispatch => {
    dispatch(momentsListRequesting(true));

    const endpoint = 'moments' + stringifyParams(queryParams);
    callV1Api(endpoint, 'GET')
      .then(response => {
        if (!response.ok) {
          dispatch(momentsListError(true));
        }

        return response.json();
      })
      .then(jsonReponse => {
        expandIncludes(jsonReponse.data, jsonReponse.included);
        dispatch(momentsListSuccess(jsonReponse.data));
        dispatch(momentsListRequesting(false));
      });
  };
};
