import {
  RECORD_BOOKS_ADD_ERROR,
  recordBooksAddError,
  RECORD_BOOKS_ADD_REQUESTING,
  recordBooksAddRequesting,
  RECORD_BOOKS_ADD_SUCCESS,
  recordBooksAddSuccess,
  RECORD_BOOKS_COLLAPSE_TOGGLE,
  recordBooksCollapseToggle,
  RECORD_BOOKS_LIST_ERROR,
  recordBooksListError,
  RECORD_BOOKS_LIST_REQUESTING,
  recordBooksListRequesting,
  RECORD_BOOKS_LIST_SUCCESS,
  recordBooksListSuccess,
  RECORD_BOOKS_VIEW_ERROR,
  recordBooksViewError,
  RECORD_BOOKS_VIEW_REQUESTING,
  recordBooksViewRequesting,
  RECORD_BOOKS_VIEW_SUCCESS,
  recordBooksViewSuccess
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

  it('should create recordBooksListError', () => {
    const isError = true;
    const expectedAction = {
      type: RECORD_BOOKS_LIST_ERROR,
      isError
    };
    expect(recordBooksListError(isError)).toEqual(expectedAction);
  });

  it('should create recordBooksListRequesting', () => {
    const isRequesting = true;
    const expectedAction = {
      type: RECORD_BOOKS_LIST_REQUESTING,
      isRequesting
    };
    expect(recordBooksListRequesting(isRequesting)).toEqual(expectedAction);
  });

  it('should create recordBooksListSuccess', () => {
    const recordBooks = [{ test: 'Fake Record Book' }];
    const expectedAction = {
      type: RECORD_BOOKS_LIST_SUCCESS,
      recordBooks
    };
    expect(recordBooksListSuccess(recordBooks)).toEqual(expectedAction);
  });

  it('should create recordBooksViewError', () => {
    const isError = true;
    const expectedAction = {
      type: RECORD_BOOKS_VIEW_ERROR,
      isError
    };
    expect(recordBooksViewError(isError)).toEqual(expectedAction);
  });

  it('should create recordBooksViewRequesting', () => {
    const isRequesting = true;
    const expectedAction = {
      type: RECORD_BOOKS_VIEW_REQUESTING,
      isRequesting
    };
    expect(recordBooksViewRequesting(isRequesting)).toEqual(expectedAction);
  });

  it('should create recordBooksViewSuccess', () => {
    const recordBook = { test: 'Fake Record Book' };
    const expectedAction = {
      type: RECORD_BOOKS_VIEW_SUCCESS,
      recordBook
    };
    expect(recordBooksViewSuccess(recordBook)).toEqual(expectedAction);
  });
});
