import { RECORD_BOOKS_COLLAPSE_TOGGLE, SIDENAV_TOGGLE } from '../../actions/ui';

const initialState = {
  isRecordBooksCollapseOpen: false,
  isSidenavOpen: false
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case RECORD_BOOKS_COLLAPSE_TOGGLE:
      return Object.assign({}, state, {
        isRecordBooksCollapseOpen: action.isOpen
      });

    case SIDENAV_TOGGLE:
      return Object.assign({}, state, { isSidenavOpen: action.isOpen });

    default:
      return state;
  }
};

export default ui;
