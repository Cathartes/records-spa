import { RECORD_BOOKS_COLLAPSE_TOGGLE } from '../../actions/recordBooks';

const initialState = {
  isRecordBooksCollapseOpen: false
};

const recordBooks = (state = initialState, action) => {
  switch (action.type) {
    case RECORD_BOOKS_COLLAPSE_TOGGLE:
      return Object.assign({}, state, {
        isRecordBooksCollapseOpen: action.isOpen
      });

    default:
      return state;
  }
};

export default recordBooks;
