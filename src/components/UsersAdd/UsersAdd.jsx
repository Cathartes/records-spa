import React, { Component } from 'react';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';
import formStyles from '../../styles/form';

import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardContent from 'material-ui/Card/CardContent';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import usersListQuery from '../../queries/usersListQuery';

class UsersAdd extends Component {
  state = {
    discordName: null,
    shouldRedirect: false
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
        variables: { discordName: this.state.discordName },
        refetchQueries: [{ query: usersListQuery }]
      })
      .then(({ data }) => {
        this.setState({ shouldRedirect: true });
      });
  };

  render() {
    const { classes, currentUser } = this.props;
    const { shouldRedirect } = this.state;

    if (!currentUser || !currentUser.admin) {
      return <Redirect to="/" />;
    } else if (shouldRedirect) {
      return <Redirect to="/members" />;
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
                Add Member
              </Typography>

              <TextField
                autoFocus
                className={classNames(classes.textField)}
                fullWidth
                label="Discord Name"
                margin="normal"
                name="discordName"
                onChange={this.handleTextChange}
                required
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

export default withStyles(styles)(UsersAdd);
