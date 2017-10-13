import {
  RECORD_BOOKS_ADD_ERROR,
  recordBooksAddError,
  RECORD_BOOKS_ADD_REQUESTING,
  recordBooksAddRequesting,
  RECORD_BOOKS_ADD_SUCCESS,
  recordBooksAddSuccess,
  RECORD_BOOKS_COLLAPSE_TOGGLE,
  recordBooksCollapseToggle
} from './recordBooks';

describe('recordBooks actions', () => {
  it('should create recordBooksAddError', () => {
    const isError = true;
    const expectedAction = {
      type: RECORD_BOOKS_ADD_ERROR,
      isError
    };
    expect(recordBooksAddError(isError)).toEqual(expectedAction);
  });

  it('should create recordBooksAddRequesting', () => {
    const isRequesting = true;
    const expectedAction = {
      type: RECORD_BOOKS_ADD_REQUESTING,
      isRequesting
    };
    expect(recordBooksAddRequesting(isRequesting)).toEqual(expectedAction);
  });

  it('should create recordBooksAddSuccess', () => {
    const recordBook = { test: 'Fake Record Book' };
    const expectedAction = {
      type: RECORD_BOOKS_ADD_SUCCESS,
      recordBook
    };
    expect(recordBooksAddSuccess(recordBook)).toEqual(expectedAction);
  });

  it('should create recordBooksCollapseToggle', () => {
    const isOpen = true;
    const expectedAction = {
      type: RECORD_BOOKS_COLLAPSE_TOGGLE,
      isOpen: isOpen
    };
    expect(recordBooksCollapseToggle(isOpen)).toEqual(expectedAction);
  });
});
