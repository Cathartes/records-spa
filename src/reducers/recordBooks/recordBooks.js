import {
  RECORD_BOOKS_GET_REQUESTING,
  RECORD_BOOKS_GET_SUCCESS,
  RECORD_BOOKS_POST_REQUESTING,
  RECORD_BOOKS_POST_SUCCESS
} from '../../actions/recordBooks';

const initialState = {
  recordBooks: [],
  recordBooksGetRequesting: false,
  recordBooksPostRequesting: false
};

const recordBooks = (state = initialState, action) => {
  switch (action.type) {
    case RECORD_BOOKS_GET_REQUESTING:
      return Object.assign({}, state, {
        recordBooksGetRequesting: action.isRequesting
      });
    case RECORD_BOOKS_GET_SUCCESS:
      return Object.assign({}, state, { recordBooks: action.recordBooks });
    case RECORD_BOOKS_POST_REQUESTING:
      return Object.assign({}, state, {
        recordBooksPostRequesting: action.isRequesting
      });
    case RECORD_BOOKS_POST_SUCCESS:
      return Object.assign({}, state, {
        recordBooks: [...state.recordBooks, action.recordBook]
      });
    default:
      return state;
  }
};

export default recordBooks;
