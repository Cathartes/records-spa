import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';
import formStyles from '../../styles/form';

import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import { loginPost } from '../../actions/auth';

class Login extends PureComponent {
  state = {
    email: null,
    password: null
  };

  handleTextChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginPost(this.state.email, this.state.password);
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
              <Typography
                className={classNames(classes.formTitle)}
                type="title"
              >
                Log In
              </Typography>

              <TextField
                required
                autoFocus
                name="email"
                label="Email"
                type="email"
                onChange={this.handleTextChange}
                margin="normal"
                fullWidth
                className={classNames(classes.textField)}
              />
              <TextField
                required
                name="password"
                label="Password"
                type="password"
                onChange={this.handleTextChange}
                margin="normal"
                fullWidth
                className={classNames(classes.textField)}
              />
            </CardContent>

            <CardActions className={classNames(classes.submitContainer)}>
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

const styles = theme => {
  return formStyles(theme);
};

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
