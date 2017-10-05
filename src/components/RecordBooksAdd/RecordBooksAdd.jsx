import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';
import formStyles from '../../styles/form';

import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import { recordBooksAdd } from '../../actions/recordBooks';

class RecordBooksAdd extends Component {
  state = {
    name: null,
    startedSubmit: false
  };

  handleTextChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.recordBooksAdd(this.state.name);
    this.setState({
      startedSubmit: true
    });
  };

  render() {
    const { classes, currentUser, recordBooksAddRequesting } = this.props;
    const { startedSubmit } = this.state;

    if (
      !currentUser ||
      !currentUser.attributes.admin ||
      (startedSubmit && !recordBooksAddRequesting)
    ) {
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
                Add Record
              </Typography>

              <TextField
                required
                autoFocus
                name="name"
                label="Name"
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
    currentUser: state.auth.currentUser,
    recordBooksAddRequesting: state.recordBooks.recordBooksAddRequesting
  };
};

const mapDispatchToProps = dispatch => {
  return {
    recordBooksAdd: name => {
      dispatch(recordBooksAdd(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(RecordBooksAdd)
);
