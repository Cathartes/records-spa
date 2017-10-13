export const RECORD_BOOKS_COLLAPSE_TOGGLE = 'RECORD_BOOKS_COLLAPSE_TOGGLE';

export const recordBooksCollapseToggle = isOpen => {
  return {
    type: RECORD_BOOKS_COLLAPSE_TOGGLE,
    isOpen
  };
};
