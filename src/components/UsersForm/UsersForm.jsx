import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import FormControl from 'material-ui/Form/FormControl';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import MenuItem from 'material-ui/Menu/MenuItem';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';

import DeleteMember from '../DeleteMember';

class UsersForm extends PureComponent {
  state = {
    discordName: this.props.user ? this.props.user.discordName : '',
    membershipType: this.props.user
      ? this.props.user.membershipType
      : 'applicant',
    confirmDelete: false
  };

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
  };

  render() {
    const {
      open,
      onRequestClose,
      submitText,
      titleText,
      user,
      refetch
    } = this.props;
    const { discordName, membershipType } = this.state;
    console.log(this.props);
    return (
      <Dialog open={open} onRequestClose={onRequestClose}>
        <form onSubmit={this.handleSubmit} noValidate>
          <DialogTitle>{titleText}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              label="Discord Name"
              margin="dense"
              name="discordName"
              onChange={this.handleInputChange('discordName')}
              required
              value={discordName}
            />

            <FormControl fullWidth margin="dense">
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
          </DialogContent>

          <DialogActions>
            <DeleteMember
              user={user}
              refetch={refetch}
              closeDialog={onRequestClose}
            />
            <Button raised type="submit">
              {submitText}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}

UsersForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  user: PropTypes.object
};

UsersForm.defaultProps = {
  submitText: 'Submit'
};

export default UsersForm;
