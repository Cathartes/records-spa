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

import momentsListQuery from '../../queries/momentsListQuery';

class CompletionsAdd extends Component {
  state = { challengeId: '0', participationId: '0', points: null, rank: null };

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          challengeId: this.state.challengeId,
          participationId: this.state.participationId,
          points: parseInt(this.state.points, 10) || null,
          rank: parseInt(this.state.rank, 10) || null
        },
        refetchQueries: [
          {
            query: momentsListQuery,
            variables: { recordBookId: this.props.match.params.recordBookId }
          }
        ]
      })
      .then(({ data }) => {
        this.setState({ shouldRedirect: true });
      });
  };

  render() {
    const { classes, currentUser, data, match } = this.props;
    const { challengeId, participationId, shouldRedirect } = this.state;

    if (!currentUser || !currentUser.admin || shouldRedirect) {
      return <Redirect to={`/records/${match.params.recordBookId}`} />;
    }

    return (
      <div className={classNames(classes.container)}>
        <Card>
          <form onSubmit={this.handleSubmit} noValidate>
            <CardContent>
              <Typography type="title">Submit Completion</Typography>

              {!data.loading && (
                <FormControl fullWidth margin="normal">
                  <InputLabel htmlFor="challenge-select" required>
                    Challenge
                  </InputLabel>
                  <Select
                    input={<Input id="challenge-select" />}
                    onChange={this.handleInputChange('challengeId')}
                    value={challengeId}
                  >
                    {data.challenges.map(challenge => {
                      return (
                        <MenuItem key={challenge.id} value={challenge.id}>
                          {challenge.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              )}

              {!data.loading && (
                <FormControl fullWidth margin="normal">
                  <InputLabel htmlFor="participation-select" required>
                    Participant
                  </InputLabel>
                  <Select
                    input={<Input id="participation-select" />}
                    onChange={this.handleInputChange('participationId')}
                    value={participationId}
                  >
                    {data.participations.map(participation => {
                      return (
                        <MenuItem
                          key={participation.id}
                          value={participation.id}
                        >
                          {participation.user.discordName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              )}

              <TextField
                fullWidth
                label="Rank"
                margin="normal"
                name="rank"
                onChange={this.handleInputChange('rank')}
                type="number"
              />

              <TextField
                fullWidth
                label="Points"
                margin="normal"
                name="points"
                onChange={this.handleInputChange('points')}
                type="number"
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
  const form = formStyles(theme);
  return { ...form };
};

export default withStyles(styles)(CompletionsAdd);
