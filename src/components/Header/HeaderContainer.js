import { connect } from 'react-redux';

import { sidenavToggle } from '../../actions/ui';
import { snackbarClose, snackbarRemove } from '../../actions/snackbars';

import Header from './Header';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    snackbars: state.snackbars,
    isSidenavOpen: state.ui.isSidenavOpen
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
