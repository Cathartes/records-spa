import {
  RECORD_BOOKS_ADD_REQUESTING,
  RECORD_BOOKS_ADD_SUCCESS,
  RECORD_BOOKS_COLLAPSE_TOGGLE
} from '../../actions/recordBooks';

const initialState = {
  isRecordBooksCollapseOpen: false,
  recordBooksAddRequesting: false
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

    default:
      return state;
  }
};

export default recordBooks;
