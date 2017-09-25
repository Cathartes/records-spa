import { SIDENAV_TOGGLE } from '../../actions/sideNav';

const initialState = {
  isOpen: false
};

const sideNavToggle = (state = initialState, action) => {
  switch (action.type) {
    case SIDENAV_TOGGLE:
      return Object.assign({}, state, { isOpen: action.isOpen });
    default:
      return state;
  }
};

export default sideNavToggle;
