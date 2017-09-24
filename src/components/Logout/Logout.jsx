import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logoutDelete } from '../../actions/auth';
import { snackbarAdd } from '../../actions/snackbars';

class Logout extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(logoutDelete());
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
