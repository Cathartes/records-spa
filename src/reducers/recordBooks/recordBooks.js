import { RECORD_BOOKS_GET_SUCCESS } from '../../actions/recordBooks';

const initialState = [];

const recordBooks = (state = initialState, action) => {
  switch (action.type) {
    case RECORD_BOOKS_GET_SUCCESS:
      return action.recordBooks;
    default:
      return state;
  }
};

export default recordBooks;
