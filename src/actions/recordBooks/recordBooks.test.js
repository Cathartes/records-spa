import {
  RECORD_BOOKS_COLLAPSE_TOGGLE,
  recordBooksCollapseToggle
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
});
