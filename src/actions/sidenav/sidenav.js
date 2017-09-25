export const SIDENAV_TOGGLE = 'SIDENAV_TOGGLE';

export const sidenavToggle = isOpen => {
  return {
    type: SIDENAV_TOGGLE,
    isOpen
  };
};
