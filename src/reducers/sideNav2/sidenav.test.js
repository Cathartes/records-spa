import { SIDENAV_TOGGLE } from '../../actions/sideNav';

import reducer from './sideNav';

describe('sideNav reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ isOpen: false });
  });

  it('should handle SIDENAV_TOGGLE', () => {
    const isOpen = true;
    expect(
      reducer(
        {},
        {
          type: SIDENAV_TOGGLE,
          isOpen: isOpen
        }
      )
    ).toEqual({ isOpen: isOpen });
  });
});
