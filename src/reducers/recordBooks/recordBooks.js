import {
  RECORD_BOOKS_ADD_REQUESTING,
  RECORD_BOOKS_ADD_SUCCESS,
  RECORD_BOOKS_COLLAPSE_TOGGLE,
  RECORD_BOOKS_LIST_REQUESTING,
  RECORD_BOOKS_LIST_SUCCESS,
  RECORD_BOOKS_VIEW_REQUESTING,
  RECORD_BOOKS_VIEW_SUCCESS
} from '../../actions/recordBooks';

const initialState = {
  isRecordBooksCollapseOpen: false,
  recordBooksAddRequesting: false,
  recordBooksList: [],
  recordBooksListRequesting: false,
  recordBooksView: null,
  recordBooksViewRequesting: false
};

const recordBooks = (state = initialState, action) => {
  switch (action.type) {
    case RECORD_BOOKS_ADD_REQUESTING:
      return Object.assign({}, state, {
        recordBooksAddRequesting: action.isRequesting
      });
    case RECORD_BOOKS_ADD_SUCCESS:
      return Object.assign({}, state, {
        recordBooksList: [...state.recordBooksList, action.recordBook]
      });

    case RECORD_BOOKS_COLLAPSE_TOGGLE:
      return Object.assign({}, state, {
        isRecordBooksCollapseOpen: action.isOpen
      });

    case RECORD_BOOKS_LIST_REQUESTING:
      return Object.assign({}, state, {
        recordBooksListRequesting: action.isRequesting
      });
    case RECORD_BOOKS_LIST_SUCCESS:
      return Object.assign({}, state, { recordBooksList: action.recordBooks });

    case RECORD_BOOKS_VIEW_REQUESTING:
      return Object.assign({}, state, {
        recordBooksViewRequesting: action.isRequesting
      });
    case RECORD_BOOKS_VIEW_SUCCESS:
      return Object.assign({}, state, { recordBooksView: action.recordBook });

    default:
      return state;
  }
};

export default recordBooks;
