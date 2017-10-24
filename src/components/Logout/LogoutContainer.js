import { connect } from 'react-redux';

import { logoutSuccess } from '../../actions/auth';
import { snackbarAdd } from '../../actions/snackbars';

import Logout from './Logout';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutSuccess: () => {
      dispatch(logoutSuccess());
    },
    snackbarAdd: message => {
      dispatch(snackbarAdd(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
