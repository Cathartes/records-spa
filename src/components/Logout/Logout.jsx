import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends PureComponent {
  componentDidMount() {
    this.props.logoutSuccess();
    this.props.snackbarAdd('Successfully logged out!');
  }

  render() {
    return <Redirect to={'/'} />;
  }
}

export default Logout;
