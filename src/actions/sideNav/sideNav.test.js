import { SIDENAV_TOGGLE, sideNavToggle } from './sideNav';

describe('sideNav actions', () => {
  it('should create sideNavToggle', () => {
    const isOpen = true;
    const expectedAction = {
      type: SIDENAV_TOGGLE,
      isOpen: isOpen
    };
    expect(sideNavToggle(isOpen)).toEqual(expectedAction);
  });
});
