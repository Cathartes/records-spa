import { callV1Api } from '../../helpers/api';

export const RECORD_BOOKS_COLLAPSE_TOGGLE = 'RECORD_BOOKS_COLLAPSE_TOGGLE';

export const RECORD_BOOKS_ADD_ERROR = 'RECORD_BOOKS_ADD_ERROR';
export const RECORD_BOOKS_ADD_REQUESTING = 'RECORD_BOOKS_ADD_REQUESTING';
export const RECORD_BOOKS_ADD_SUCCESS = 'RECORD_BOOKS_ADD_SUCCESS';

export const recordBooksCollapseToggle = isOpen => {
  return {
    type: RECORD_BOOKS_COLLAPSE_TOGGLE,
    isOpen
  };
};

export const recordBooksAddError = isError => {
  return {
    type: RECORD_BOOKS_ADD_ERROR,
    isError
  };
};

export const recordBooksAddRequesting = isRequesting => {
  return {
    type: RECORD_BOOKS_ADD_REQUESTING,
    isRequesting
  };
};

export const recordBooksAddSuccess = recordBook => {
  return {
    type: RECORD_BOOKS_ADD_SUCCESS,
    recordBook
  };
};

export const recordBooksAdd = name => {
  return dispatch => {
    dispatch(recordBooksAddRequesting(true));

    const body = {
      data: {
        attributes: {
          name: name
        }
      }
    };

    callV1Api('record_books', 'POST', body)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(recordBooksAddRequesting(false));

        return response.json();
      })
      .then(recordBooks => dispatch(recordBooksAddSuccess(recordBooks.data)))
      .catch(() => dispatch(recordBooksAddError(true)));
  };
};
