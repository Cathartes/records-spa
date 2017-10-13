import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logoutSuccess } from '../../actions/auth';
import { snackbarAdd } from '../../actions/snackbars';

class Logout extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(logoutSuccess());
    dispatch(snackbarAdd('Successfully logged out!'));
  }

  render() {
    return <Redirect to={'/'} />;
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(Logout);
