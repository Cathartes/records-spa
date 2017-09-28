import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';

import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardContent from 'material-ui/Card/CardContent';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import { usersPost } from '../../actions/users';

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
  formTitle: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  submitButton: {
    marginLeft: 2.5 * theme.spacing.unit,
    marginRight: 2.5 * theme.spacing.unit
  },
  submitContainer: {
    justifyContent: 'flex-end'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class UsersAdd extends Component {
  state = {
    discordName: null
  };

  handleTextChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.usersPost(this.state.discordName);
    this.setState({
      startedSubmit: true
    });
  };

  render() {
    const { classes, currentUser, usersPostRequesting } = this.props;
    const { startedSubmit } = this.state;

    if (!currentUser || !currentUser.attributes.admin) {
      return <Redirect to="/" />;
    } else if (startedSubmit && !usersPostRequesting) {
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

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    usersPostRequesting: state.recordBooks.usersPostRequesting
  };
};

const mapDispatchToProps = dispatch => {
  return {
    usersPost: discordName => {
      dispatch(usersPost(discordName));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(UsersAdd)
);
