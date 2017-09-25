import { callV1Api } from '../../helpers/api';

export const RECORD_BOOKS_GET_ERROR = 'RECORD_BOOKS_GET_ERROR';
export const RECORD_BOOKS_GET_REQUESTING = 'RECORD_BOOKS_GET_REQUESTING';
export const RECORD_BOOKS_GET_SUCCESS = 'RECORD_BOOKS_GET_SUCCESS';

export const RECORD_BOOKS_POST_ERROR = 'RECORD_BOOKS_POST_ERROR';
export const RECORD_BOOKS_POST_REQUESTING = 'RECORD_BOOKS_POST_REQUESTING';
export const RECORD_BOOKS_POST_SUCCESS = 'RECORD_BOOKS_POST_SUCCESS';

export const recordBooksGetError = isError => {
  return {
    type: RECORD_BOOKS_GET_ERROR,
    isError
  };
};

export const recordBooksGetRequesting = isRequesting => {
  return {
    type: RECORD_BOOKS_GET_REQUESTING,
    isRequesting
  };
};

export const recordBooksGetSuccess = recordBooks => {
  return {
    type: RECORD_BOOKS_GET_SUCCESS,
    recordBooks
  };
};

export const recordBooksGet = () => {
  return dispatch => {
    dispatch(recordBooksGetRequesting(true));

    callV1Api('record_books', 'GET')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(recordBooksGetRequesting(false));

        return response.json();
      })
      .then(recordBooks => dispatch(recordBooksGetSuccess(recordBooks.data)))
      .catch(() => dispatch(recordBooksGetError(true)));
  };
};

export const recordBooksPostError = isError => {
  return {
    type: RECORD_BOOKS_POST_ERROR,
    isError
  };
};

export const recordBooksPostRequesting = isRequesting => {
  return {
    type: RECORD_BOOKS_POST_REQUESTING,
    isRequesting
  };
};

export const recordBooksPostSuccess = recordBook => {
  return {
    type: RECORD_BOOKS_POST_SUCCESS,
    recordBook
  };
};

export const recordBooksPost = name => {
  return dispatch => {
    dispatch(recordBooksPostRequesting(true));

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

        dispatch(recordBooksPostRequesting(false));

        return response.json();
      })
      .then(recordBooks => dispatch(recordBooksPostSuccess(recordBooks.data)))
      .catch(() => dispatch(recordBooksPostError(true)));
  };
};
