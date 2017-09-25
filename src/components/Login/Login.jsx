import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';

import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import { loginPost } from '../../actions/auth';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  submitButton: {
    marginLeft: 2.5 * theme.spacing.unit,
    marginRight: 2.5 * theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class Login extends Component {
  email = null;
  password = null;

  handleEmailChange = event => {
    this.email = event.target.value;
  };

  handlePasswordChange = event => {
    this.password = event.target.value;
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginPost(this.email, this.password);
  };

  render() {
    const { classes, currentUser } = this.props;

    if (currentUser) {
      return <Redirect to={'/'} />;
    }

    return (
      <div className={classNames(classes.container)}>
        <Card>
          <form onSubmit={this.handleSubmit} noValidate>
            <CardContent className={classNames(classes.form)}>
              <TextField
                required
                autoFocus
                id="email"
                label="Email"
                type="email"
                onChange={this.handleEmailChange}
                margin="normal"
                fullWidth
                className={classNames(classes.textField)}
              />
              <TextField
                required
                id="password"
                label="Password"
                type="password"
                onChange={this.handlePasswordChange}
                margin="normal"
                fullWidth
                className={classNames(classes.textField)}
              />
            </CardContent>
            <CardActions>
              <Button
                raised
                type="submit"
                className={classNames(classes.submitButton)}
              >
                Submit
              </Button>
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginPost: (email, password) => {
      dispatch(loginPost(email, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Login)
);
