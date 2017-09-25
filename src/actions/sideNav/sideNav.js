export const SIDENAV_TOGGLE = 'SIDENAV_TOGGLE';

export const sideNavToggle = isOpen => {
  return {
    type: SIDENAV_TOGGLE,
    isOpen
  };
};
