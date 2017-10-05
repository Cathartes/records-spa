import {
  RECORD_BOOKS_COLLAPSE_TOGGLE,
  RECORD_BOOKS_LIST_REQUESTING,
  RECORD_BOOKS_LIST_SUCCESS,
  RECORD_BOOKS_ADD_REQUESTING,
  RECORD_BOOKS_ADD_SUCCESS
} from '../../actions/recordBooks';

import reducer from './recordBooks';

describe('recordBooks reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isRecordBooksCollapseOpen: false,
      recordBooksAddRequesting: false,
      recordBooksList: [],
      recordBooksListRequesting: false,
      recordBooksView: null,
      recordBooksViewRequesting: false
    });
  });

  it('should handle RECORD_BOOKS_ADD_REQUESTING', () => {
    const isRequesting = true;
    expect(
      reducer(
        {},
        {
          type: RECORD_BOOKS_ADD_REQUESTING,
          isRequesting
        }
      )
    ).toEqual({ recordBooksAddRequesting: isRequesting });
  });

  it('should handle RECORD_BOOKS_ADD_SUCCESS', () => {
    const recordBook = { test: 'Fake Record Book' };
    expect(
      reducer(
        { recordBooksList: [] },
        {
          type: RECORD_BOOKS_ADD_SUCCESS,
          recordBook
        }
      )
    ).toEqual({ recordBooksList: [recordBook] });
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

  it('should handle RECORD_BOOKS_LIST_REQUESTING', () => {
    const isRequesting = true;
    expect(
      reducer(
        {},
        {
          type: RECORD_BOOKS_LIST_REQUESTING,
          isRequesting
        }
      )
    ).toEqual({ recordBooksListRequesting: isRequesting });
  });

  it('should handle RECORD_BOOKS_LIST_SUCCESS', () => {
    const recordBooks = [{ test: 'Fake Record Book' }];
    expect(
      reducer(
        {},
        {
          type: RECORD_BOOKS_LIST_SUCCESS,
          recordBooks
        }
      )
    ).toEqual({ recordBooksList: recordBooks });
  });
});
