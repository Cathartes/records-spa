import { SIDENAV_TOGGLE } from '../../actions/sidenav';

const initialState = {
  isOpen: false
};

const sidenavToggle = (state = initialState, action) => {
  switch (action.type) {
    case SIDENAV_TOGGLE:
      return Object.assign({}, state, { isOpen: action.isOpen });
    default:
      return state;
  }
};

export default sidenavToggle;
