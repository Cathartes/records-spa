import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import TextField from 'material-ui/TextField';

class UsersForm extends PureComponent {
  state = {
    maxCompletions: 1,
    name: '',
    pointsCompletion: '',
    pointsFirst: '',
    pointsSecond: '',
    pointsThird: '',
    ...this.props.challenge
  };

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
  };

  render() {
    const { open, onRequestClose, submitText, titleText } = this.props;
    const {
      maxCompletions,
      name,
      pointsCompletion,
      pointsFirst,
      pointsSecond,
      pointsThird
    } = this.state;

    return (
      <Dialog open={open} onRequestClose={onRequestClose}>
        <form onSubmit={this.handleSubmit} noValidate>
          <DialogTitle>{titleText}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              label="Name"
              margin="dense"
              name="name"
              onChange={this.handleInputChange('name')}
              required
              value={name}
            />

            <TextField
              fullWidth
              label="Max Completions"
              margin="dense"
              name="maxCompletions"
              onChange={this.handleInputChange('maxCompletions')}
              required
              type="number"
              value={maxCompletions}
            />

            <TextField
              fullWidth
              label="Completion Points"
              margin="dense"
              name="pointsCompletion"
              onChange={this.handleInputChange('pointsCompletion')}
              required
              type="number"
              value={pointsCompletion}
            />

            <TextField
              fullWidth
              label="First"
              margin="dense"
              name="pointsFirst"
              onChange={this.handleInputChange('pointsFirst')}
              type="number"
              value={pointsFirst}
            />

            <TextField
              fullWidth
              label="Second"
              margin="dense"
              name="pointsSecond"
              onChange={this.handleInputChange('pointsSecond')}
              type="number"
              value={pointsSecond}
            />

            <TextField
              fullWidth
              label="Third"
              margin="dense"
              name="pointsThird"
              onChange={this.handleInputChange('pointsThird')}
              type="number"
              value={pointsThird}
            />
          </DialogContent>

          <DialogActions>
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
  challenge: PropTypes.object
};

UsersForm.defaultProps = {
  submitText: 'Submit'
};

export default UsersForm;
