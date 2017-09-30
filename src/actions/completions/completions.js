import { callV1Api, stringifyParams } from '../../helpers/api';

export const COMPLETIONS_LIST_ERROR = 'COMPLETIONS_LIST_ERROR';
export const COMPLETIONS_LIST_REQUESTING = 'COMPLETIONS_LIST_REQUESTING';
export const COMPLETIONS_LIST_SUCCESS = 'COMPLETIONS_LIST_SUCCESS';

export const completionsListError = isError => {
  return {
    type: COMPLETIONS_LIST_ERROR,
    isError
  };
};

export const completionsListRequesting = isRequesting => {
  return {
    type: COMPLETIONS_LIST_REQUESTING,
    isRequesting
  };
};

export const completionsListSuccess = completions => {
  return {
    type: COMPLETIONS_LIST_SUCCESS,
    completions
  };
};

export const completionsList = queryParams => {
  return dispatch => {
    dispatch(completionsListRequesting(true));

    const endpoint = 'completions' + stringifyParams(queryParams);
    callV1Api(endpoint, 'GET')
      .then(response => {
        if (!response.ok) {
          dispatch(completionsListError(true));
        }

        return response.json();
      })
      .then(jsonReponse => {
        dispatch(completionsListSuccess(jsonReponse.data));
        dispatch(completionsListRequesting(false));
      });
  };
};
