export const RECORD_BOOKS_COLLAPSE_TOGGLE = 'RECORD_BOOKS_COLLAPSE_TOGGLE';
export const SIDENAV_TOGGLE = 'SIDENAV_TOGGLE';

export const recordBooksCollapseToggle = isOpen => {
  return {
    type: RECORD_BOOKS_COLLAPSE_TOGGLE,
    isOpen
  };
};

export const sidenavToggle = isOpen => {
  return {
    type: SIDENAV_TOGGLE,
    isOpen
  };
};
