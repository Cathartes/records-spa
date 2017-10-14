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
    startTime: null,
    endTime: null,
    rushStartTime: null,
    rushEndTime: null,
    shouldRedirect: false
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          name: this.state.name,
          startTime: this.state.startTime,
          endTime: this.state.endTime,
          rushStartTime: this.state.rushStartTime,
          rushEndTime: this.state.rushEndTime
        },
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
            <CardContent>
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
                onChange={this.handleInputChange}
                margin="normal"
                fullWidth
                className={classNames(classes.textField)}
              />

              <div className={classNames(classes.dateInputContainer)}>
                <TextField
                  name="startTime"
                  label="Start Date"
                  type="datetime-local"
                  onChange={this.handleInputChange}
                  margin="normal"
                  className={classNames(classes.dateInput, classes.textField)}
                  InputLabelProps={{ shrink: true }}
                />

                <TextField
                  name="endTime"
                  label="End Date"
                  type="datetime-local"
                  onChange={this.handleInputChange}
                  margin="normal"
                  className={classNames(classes.dateInput, classes.textField)}
                  InputLabelProps={{ shrink: true }}
                />
              </div>

              <div className={classNames(classes.dateInputContainer)}>
                <TextField
                  name="rushStartTime"
                  label="Rush Start Date"
                  type="datetime-local"
                  onChange={this.handleInputChange}
                  margin="normal"
                  className={classNames(classes.dateInput, classes.textField)}
                  InputLabelProps={{ shrink: true }}
                />

                <TextField
                  name="rushEndTime"
                  label="Rush End Date"
                  type="datetime-local"
                  onChange={this.handleInputChange}
                  margin="normal"
                  className={classNames(classes.dateInput, classes.textField)}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
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
  const form = formStyles(theme);
  return {
    ...form,
    dateInputContainer: {
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap'
    },
    dateInput: {
      flex: 1,
      minWidth: 200
    }
  };
};

export default withStyles(styles)(RecordBooksAdd);
