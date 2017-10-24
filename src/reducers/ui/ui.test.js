import { RECORD_BOOKS_COLLAPSE_TOGGLE, SIDENAV_TOGGLE } from '../../actions/ui';

import reducer from './ui';

describe('ui reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isSidenavOpen: false,
      isRecordBooksCollapseOpen: false
    });
  });

  it('should handle RECORD_BOOKS_COLLAPSE_TOGGLE', () => {
    const isOpen = true;
    expect(
      reducer(
        {},
        {
          type: RECORD_BOOKS_COLLAPSE_TOGGLE,
          isOpen
        }
      )
    ).toEqual({ isRecordBooksCollapseOpen: isOpen });
  });

  it('should handle SIDENAV_TOGGLE', () => {
    const isOpen = true;
    expect(
      reducer(
        {},
        {
          type: SIDENAV_TOGGLE,
          isOpen
        }
      )
    ).toEqual({ isSidenavOpen: isOpen });
  });
});
