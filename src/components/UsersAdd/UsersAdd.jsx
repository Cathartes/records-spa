import React, { Component } from 'react';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';
import formStyles from '../../styles/form';

import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardContent from 'material-ui/Card/CardContent';
import FormControl from 'material-ui/Form/FormControl';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import MenuItem from 'material-ui/Menu/MenuItem';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import usersListQuery from '../../queries/usersListQuery';

class UsersAdd extends Component {
  state = {
    discordName: null,
    membershipType: 'applicant',
    shouldRedirect: false
  };

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          discordName: this.state.discordName,
          membershipType: this.state.membershipType
        },
        refetchQueries: [{ query: usersListQuery }]
      })
      .then(({ data }) => {
        this.setState({ shouldRedirect: true });
      });
  };

  render() {
    const { classes, currentUser } = this.props;
    const { membershipType, shouldRedirect } = this.state;

    if (!currentUser || !currentUser.admin) {
      return <Redirect to="/" />;
    } else if (shouldRedirect) {
      return <Redirect to="/members" />;
    }

    return (
      <div className={classNames(classes.formContainer)}>
        <Card>
          <form onSubmit={this.handleSubmit} noValidate>
            <CardContent>
              <Typography type="title">Add Member</Typography>

              <TextField
                autoFocus
                fullWidth
                label="Discord Name"
                margin="normal"
                name="discordName"
                onChange={this.handleInputChange('discordName')}
                required
              />

              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="membership-type-select" required>
                  Challenge
                </InputLabel>
                <Select
                  input={<Input id="membership-type-select" />}
                  onChange={this.handleInputChange('membershipType')}
                  value={membershipType}
                >
                  <MenuItem value="applicant">Applicant</MenuItem>
                  <MenuItem value="member">Member</MenuItem>
                </Select>
              </FormControl>
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
