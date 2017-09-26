import {
  RECORD_BOOKS_COLLAPSE_TOGGLE,
  recordBooksCollapseToggle,
  RECORD_BOOKS_GET_ERROR,
  recordBooksGetError,
  RECORD_BOOKS_GET_REQUESTING,
  recordBooksGetRequesting,
  RECORD_BOOKS_GET_SUCCESS,
  recordBooksGetSuccess,
  RECORD_BOOKS_POST_ERROR,
  recordBooksPostError,
  RECORD_BOOKS_POST_REQUESTING,
  recordBooksPostRequesting,
  RECORD_BOOKS_POST_SUCCESS,
  recordBooksPostSuccess
} from './recordBooks';

describe('recordBooks actions', () => {
  it('should create recordBooksCollapseToggle', () => {
    const isOpen = true;
    const expectedAction = {
      type: RECORD_BOOKS_COLLAPSE_TOGGLE,
      isOpen: isOpen
    };
    expect(recordBooksCollapseToggle(isOpen)).toEqual(expectedAction);
  });

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

  it('should create recordBooksPostError', () => {
    const isError = true;
    const expectedAction = {
      type: RECORD_BOOKS_POST_ERROR,
      isError
    };
    expect(recordBooksPostError(isError)).toEqual(expectedAction);
  });

  it('should create recordBooksPostRequesting', () => {
    const isRequesting = true;
    const expectedAction = {
      type: RECORD_BOOKS_POST_REQUESTING,
      isRequesting
    };
    expect(recordBooksPostRequesting(isRequesting)).toEqual(expectedAction);
  });

  it('should create recordBooksPostSuccess', () => {
    const recordBook = { test: 'Fake Record Book' };
    const expectedAction = {
      type: RECORD_BOOKS_POST_SUCCESS,
      recordBook
    };
    expect(recordBooksPostSuccess(recordBook)).toEqual(expectedAction);
  });
});
