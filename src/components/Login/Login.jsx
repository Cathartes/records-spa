import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';
import formStyles from '../../styles/form';

import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

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
    this.props
      .mutate({
        variables: { email: this.state.email, password: this.state.password }
      })
      .then(({ data }) => {
        if (data.login.token) {
          this.props.loginSuccess(data.login.token, data.login.uid);
          this.props.setCurrentUser(data.login.user);
        }
      });
  };

  render() {
    const { classes, currentUser } = this.props;

    if (currentUser) {
      return <Redirect to={'/'} />;
    }

    return (
      <div className={classNames(classes.formContainer)}>
        <Card>
          <form onSubmit={this.handleSubmit} noValidate>
            <CardContent>
              <Typography type="title">Log In</Typography>

              <TextField
                autoFocus
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                onChange={this.handleTextChange}
                required
                type="email"
              />

              <TextField
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                onChange={this.handleTextChange}
                required
                type="password"
              />
            </CardContent>

            <CardActions className={classNames(classes.submitContainer)}>
              <Button
                className={classNames(classes.submitButton)}
                raised
                type="submit"
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

export default withStyles(styles)(Login);
