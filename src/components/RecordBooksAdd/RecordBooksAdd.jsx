import React, { Component } from 'react';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';
import formStyles from '../../styles/form';

import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import recordBooksListQuery from '../../queries/recordBooksListQuery';

class RecordBooksAdd extends Component {
  state = {
    name: null,
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
        variables: { name: this.state.name },
        refetchQueries: [{ query: recordBooksListQuery }]
      })
      .then(({ data }) => {
        this.setState({ shouldRedirect: true });
      });
  };

  render() {
    const { classes, currentUser } = this.props;
    const { shouldRedirect } = this.state;

    if (!currentUser || !currentUser.admin || shouldRedirect) {
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

export default withStyles(styles)(RecordBooksAdd);
