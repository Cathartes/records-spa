import { RECORD_BOOKS_COLLAPSE_TOGGLE } from '../../actions/recordBooks';

import reducer from './recordBooks';

describe('recordBooks reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
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
          isOpen: isOpen
        }
      )
    ).toEqual({ isRecordBooksCollapseOpen: isOpen });
  });
});
