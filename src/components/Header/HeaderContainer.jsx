import { connect } from 'react-redux';

import { sidenavToggle } from '../../actions/sidenav';
import { snackbarClose, snackbarRemove } from '../../actions/snackbars';

import Header from './Header';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    isSidenavOpen: state.sidenav.isOpen,
    snackbars: state.snackbars
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMenuIconClick: isSidenavOpen => {
      dispatch(sidenavToggle(isSidenavOpen));
    },
    snackbarClose: id => {
      dispatch(snackbarClose(id));
    },
    snackbarRemove: id => {
      dispatch(snackbarRemove(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
