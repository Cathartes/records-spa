import { RECORD_BOOKS_GET_SUCCESS } from '../../actions/recordBooks';

import reducer from './recordBooks';

describe('recordBooks reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle RECORD_BOOKS_GET_SUCCESS', () => {
    const recordBooks = [{ test: 'Fake Challenge' }];
    expect(
      reducer([], {
        type: RECORD_BOOKS_GET_SUCCESS,
        recordBooks
      })
    ).toEqual(recordBooks);
  });
});
