import { callV1Api } from '../../helpers/api';

export const RECORD_BOOKS_COLLAPSE_TOGGLE = 'RECORD_BOOKS_COLLAPSE_TOGGLE';

export const RECORD_BOOKS_LIST_ERROR = 'RECORD_BOOKS_LIST_ERROR';
export const RECORD_BOOKS_LIST_REQUESTING = 'RECORD_BOOKS_LIST_REQUESTING';
export const RECORD_BOOKS_LIST_SUCCESS = 'RECORD_BOOKS_LIST_SUCCESS';

export const RECORD_BOOKS_ADD_ERROR = 'RECORD_BOOKS_ADD_ERROR';
export const RECORD_BOOKS_ADD_REQUESTING = 'RECORD_BOOKS_ADD_REQUESTING';
export const RECORD_BOOKS_ADD_SUCCESS = 'RECORD_BOOKS_ADD_SUCCESS';

export const RECORD_BOOKS_VIEW_ERROR = 'RECORD_BOOKS_VIEW_ERROR';
export const RECORD_BOOKS_VIEW_REQUESTING = 'RECORD_BOOKS_VIEW_REQUESTING';
export const RECORD_BOOKS_VIEW_SUCCESS = 'RECORD_BOOKS_VIEW_SUCCESS';

export const recordBooksCollapseToggle = isOpen => {
  return {
    type: RECORD_BOOKS_COLLAPSE_TOGGLE,
    isOpen
  };
};

export const recordBooksListError = isError => {
  return {
    type: RECORD_BOOKS_LIST_ERROR,
    isError
  };
};

export const recordBooksListRequesting = isRequesting => {
  return {
    type: RECORD_BOOKS_LIST_REQUESTING,
    isRequesting
  };
};

export const recordBooksListSuccess = recordBooks => {
  return {
    type: RECORD_BOOKS_LIST_SUCCESS,
    recordBooks
  };
};

export const recordBooksList = () => {
  return dispatch => {
    dispatch(recordBooksListRequesting(true));

    callV1Api('record_books', 'GET')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(recordBooksListRequesting(false));

        return response.json();
      })
      .then(recordBooks => dispatch(recordBooksListSuccess(recordBooks.data)))
      .catch(() => dispatch(recordBooksListError(true)));
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

export const recordBooksViewError = isError => {
  return {
    type: RECORD_BOOKS_VIEW_ERROR,
    isError
  };
};

export const recordBooksViewRequesting = isRequesting => {
  return {
    type: RECORD_BOOKS_VIEW_REQUESTING,
    isRequesting
  };
};

export const recordBooksViewSuccess = recordBook => {
  return {
    type: RECORD_BOOKS_VIEW_SUCCESS,
    recordBook
  };
};

export const recordBooksView = id => {
  return dispatch => {
    dispatch(recordBooksViewRequesting(true));

    callV1Api(`record_books/${id}`, 'GET')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(recordBooksViewRequesting(false));

        return response.json();
      })
      .then(recordBook => dispatch(recordBooksViewSuccess(recordBook.data)))
      .catch(() => dispatch(recordBooksViewError(true)));
  };
};
