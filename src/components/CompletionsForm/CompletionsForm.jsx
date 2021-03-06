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

class UsersForm extends PureComponent {
  state = {
    challengeId: 0,
    participationId: 0,
    points: null,
    rank: null,
    ...this.props.completion
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
      completion,
      challenges,
      open,
      onRequestClose,
      participations,
      submitText,
      titleText
    } = this.props;
    const { challengeId, participationId, points, rank } = this.state;

    return (
      <Dialog open={open} onRequestClose={onRequestClose}>
        <form onSubmit={this.handleSubmit} noValidate>
          <DialogTitle>{titleText}</DialogTitle>
          <DialogContent>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="challenge-select" required>
                Challenge
              </InputLabel>
              <Select
                disabled={completion}
                input={<Input id="challenge-select" />}
                onChange={this.handleInputChange('challengeId')}
                value={challengeId}
              >
                {challenges.map(challenge => {
                  return (
                    <MenuItem key={challenge.id} value={challenge.id}>
                      {challenge.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="participation-select" required>
                Participant
              </InputLabel>
              <Select
                disabled={completion}
                input={<Input id="participation-select" />}
                onChange={this.handleInputChange('participationId')}
                value={participationId}
              >
                {participations.map(participation => {
                  return (
                    <MenuItem key={participation.id} value={participation.id}>
                      {participation.user.discordName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {completion && (
              <div>
                <TextField
                  fullWidth
                  label="Rank"
                  margin="normal"
                  name="rank"
                  onChange={this.handleInputChange('rank')}
                  type="number"
                  value={rank}
                />

                <TextField
                  fullWidth
                  label="Points"
                  margin="normal"
                  name="points"
                  onChange={this.handleInputChange('points')}
                  type="number"
                  value={points}
                />
              </div>
            )}
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
  challenges: PropTypes.array.isRequired,
  completion: PropTypes.object,
  onFormSubmit: PropTypes.func.isRequired,
  participations: PropTypes.array.isRequired,
  submitText: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired
};

UsersForm.defaultProps = {
  challenges: [],
  participations: [],
  submitText: 'Submit'
};

export default UsersForm;
