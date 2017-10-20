import {
  RECORD_BOOKS_COLLAPSE_TOGGLE,
  recordBooksCollapseToggle,
  SIDENAV_TOGGLE,
  sidenavToggle
} from './ui';

describe('ui actions', () => {
  it('should create recordBooksCollapseToggle', () => {
    const isOpen = true;
    const expectedAction = {
      type: RECORD_BOOKS_COLLAPSE_TOGGLE,
      isOpen
    };
    expect(recordBooksCollapseToggle(isOpen)).toEqual(expectedAction);
  });

  it('should create sidenavToggle', () => {
    const isOpen = true;
    const expectedAction = {
      type: SIDENAV_TOGGLE,
      isOpen
    };
    expect(sidenavToggle(isOpen)).toEqual(expectedAction);
  });
});
