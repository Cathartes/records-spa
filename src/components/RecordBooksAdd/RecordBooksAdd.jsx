import React, { Component } from 'react';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

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
    const timeZone = moment().format('Z');
    this.props
      .mutate({
        variables: {
          name: this.state.name,
          startTime: this.state.startTime + timeZone,
          endTime: this.state.endTime + timeZone,
          rushStartTime: this.state.rushStartTime + timeZone,
          rushEndTime: this.state.rushEndTime + timeZone
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
      <div className={classNames(classes.formContainer)}>
        <Card>
          <form onSubmit={this.handleSubmit} noValidate>
            <CardContent>
              <Typography type="title">Add Record</Typography>

              <TextField
                autoFocus
                fullWidth
                label="Name"
                margin="normal"
                name="name"
                onChange={this.handleInputChange}
                required
              />

              <div className={classNames(classes.dateInputContainer)}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  label="Start Date"
                  margin="normal"
                  name="startTime"
                  onChange={this.handleInputChange}
                  type="datetime-local"
                />

                <TextField
                  InputLabelProps={{ shrink: true }}
                  label="End Date"
                  margin="normal"
                  name="endTime"
                  onChange={this.handleInputChange}
                  type="datetime-local"
                />
              </div>

              <div className={classNames(classes.dateInputContainer)}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  label="Rush Start Date"
                  margin="normal"
                  name="rushStartTime"
                  onChange={this.handleInputChange}
                  type="datetime-local"
                />

                <TextField
                  InputLabelProps={{ shrink: true }}
                  label="Rush End Date"
                  margin="normal"
                  name="rushEndTime"
                  onChange={this.handleInputChange}
                  type="datetime-local"
                />
              </div>
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
