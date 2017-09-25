import { SIDENAV_TOGGLE, sidenavToggle } from './sidenav';

describe('sidenav actions', () => {
  it('should create sidenavToggle', () => {
    const isOpen = true;
    const expectedAction = {
      type: SIDENAV_TOGGLE,
      isOpen: isOpen
    };
    expect(sidenavToggle(isOpen)).toEqual(expectedAction);
  });
});
