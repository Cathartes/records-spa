import {
  RECORD_BOOKS_GET_ERROR,
  recordBooksGetError,
  RECORD_BOOKS_GET_REQUESTING,
  recordBooksGetRequesting,
  RECORD_BOOKS_GET_SUCCESS,
  recordBooksGetSuccess
} from './recordBooks';

describe('recordBooks actions', () => {
  it('should create recordBooksGetError', () => {
    const isError = true;
    const expectedAction = {
      type: RECORD_BOOKS_GET_ERROR,
      isError
    };
    expect(recordBooksGetError(isError)).toEqual(expectedAction);
  });

  it('should create recordBooksGetRequesting', () => {
    const isRequesting = true;
    const expectedAction = {
      type: RECORD_BOOKS_GET_REQUESTING,
      isRequesting
    };
    expect(recordBooksGetRequesting(isRequesting)).toEqual(expectedAction);
  });

  it('should create recordBooksGetSuccess', () => {
    const recordBooks = [{ test: 'Fake Record Book' }];
    const expectedAction = {
      type: RECORD_BOOKS_GET_SUCCESS,
      recordBooks
    };
    expect(recordBooksGetSuccess(recordBooks)).toEqual(expectedAction);
  });
});
