import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import withStyles from 'material-ui/styles/withStyles';

import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemAvatar from 'material-ui/List/ListItemAvatar';
import ListItemText from 'material-ui/List/ListItemText';
import Typography from 'material-ui/Typography';

import NoteAddIcon from 'material-ui-icons/NoteAdd';
import Remove from 'material-ui-icons/Remove';

import ChallengesAdd from '../../containers/ChallengesAdd';
import ChallengesEdit from '../../containers/ChallengesEdit';

import LoadingCircle from '../LoadingCircle';

class ChallengesList extends PureComponent {
  state = { addChallenge: false, editChallenge: null };

  setAddChallenge = addChallenge => event => {
    this.setState({ addChallenge: addChallenge });
  };

  setEditChallenge = challenge => event => {
    this.setState({ editChallenge: challenge });
  };

  render() {
    const { challenges, classes, loading, recordBookId } = this.props;
    const { addChallenge, editChallenge } = this.state;

    return (
      <div>
        {loading ? (
          <LoadingCircle />
        ) : (
          <List>
            {challenges.map(challenge => {
              const firstCompletion = challenge.completions[0];
              return (
                <ListItem
                  button
                  key={challenge.id}
                  onClick={this.setEditChallenge(challenge)}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <Remove />
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText
                    primary={challenge.name}
                    secondary={
                      firstCompletion ? firstCompletion.user.discordName : null
                    }
                  />

                  <Typography type="title">
                    {challenge.completionsCount}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        )}

        <Button
          aria-label="Add Challenge"
          className={classNames(classes.addButton)}
          color="accent"
          fab
          onClick={this.setAddChallenge(true)}
        >
          <NoteAddIcon />
        </Button>

        {recordBookId &&
          addChallenge && (
            <ChallengesAdd
              open
              onRequestClose={this.setAddChallenge(false)}
              recordBookId={recordBookId}
            />
          )}

        {editChallenge && (
          <ChallengesEdit
            challenge={editChallenge}
            open
            onRequestClose={this.setEditChallenge(null)}
            recordBookId={recordBookId}
          />
        )}
      </div>
    );
  }
}

ChallengesList.propTypes = {
  challenges: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  recordBookId: PropTypes.number
};

ChallengesList.defaultProps = {
  challenges: [],
  loading: false
};

const styles = theme => {
  return {
    addButton: {
      bottom: 0,
      margin: 16,
      position: 'fixed',
      right: 0
    }
  };
};

export default withStyles(styles)(ChallengesList);
