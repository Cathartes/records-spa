import {
  RECORD_BOOKS_GET_REQUESTING,
  RECORD_BOOKS_GET_SUCCESS,
  RECORD_BOOKS_POST_REQUESTING,
  RECORD_BOOKS_POST_SUCCESS
} from '../../actions/recordBooks';

import reducer from './recordBooks';

describe('recordBooks reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      recordBooks: [],
      recordBooksGetRequesting: false,
      recordBooksPostRequesting: false
    });
  });

  it('should handle RECORD_BOOKS_GET_REQUESTING', () => {
    const isRequesting = true;
    expect(
      reducer(
        {},
        {
          type: RECORD_BOOKS_GET_REQUESTING,
          isRequesting
        }
      )
    ).toEqual({ recordBooksGetRequesting: isRequesting });
  });

  it('should handle RECORD_BOOKS_GET_SUCCESS', () => {
    const recordBooks = [{ test: 'Fake Record Book' }];
    expect(
      reducer(
        {},
        {
          type: RECORD_BOOKS_GET_SUCCESS,
          recordBooks
        }
      )
    ).toEqual({ recordBooks: recordBooks });
  });

  it('should handle RECORD_BOOKS_POST_REQUESTING', () => {
    const isRequesting = true;
    expect(
      reducer(
        {},
        {
          type: RECORD_BOOKS_POST_REQUESTING,
          isRequesting
        }
      )
    ).toEqual({ recordBooksPostRequesting: isRequesting });
  });

  it('should handle RECORD_BOOKS_POST_SUCCESS', () => {
    const recordBook = { test: 'Fake Record Book' };
    expect(
      reducer(
        { recordBooks: [] },
        {
          type: RECORD_BOOKS_POST_SUCCESS,
          recordBook
        }
      )
    ).toEqual({ recordBooks: [recordBook] });
  });
});
