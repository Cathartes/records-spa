import {
  SNACKBAR_ADD,
  SNACKBAR_CLOSE,
  SNACKBAR_REMOVE
} from '../actions/snackbars';

const snackbars = (state = [], action) => {
  switch (action.type) {
    case SNACKBAR_ADD:
      return [
        ...state,
        { id: action.id, message: action.message, open: action.open }
      ];
    case SNACKBAR_CLOSE:
      return state.map(
        snackbar =>
          snackbar.id === action.id ? { ...snackbar, open: false } : snackbar
      );
    case SNACKBAR_REMOVE:
      return state.filter(snackbar => snackbar.id !== action.id);
    default:
      return state;
  }
};

export default snackbars;
