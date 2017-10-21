import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

class UsersForm extends PureComponent {
  state = {
    discordName: this.props.user ? this.props.user.discordName : null,
    membershipType: this.props.user
      ? this.props.user.membershipType
      : 'applicant'
  };

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
  };

  render() {
    const { classes, submitText } = this.props;
    const { membershipType } = this.state;

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
                  Membership Type
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
                {submitText}
              </Button>
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }
}

UsersForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
  user: PropTypes.object
};

UsersForm.defaultProps = {
  submitText: 'Submit'
};

const styles = theme => {
  return formStyles(theme);
};

export default withStyles(styles)(UsersForm);
