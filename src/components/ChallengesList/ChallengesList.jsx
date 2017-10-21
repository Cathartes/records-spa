import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemAvatar from 'material-ui/List/ListItemAvatar';
import ListItemText from 'material-ui/List/ListItemText';
import Typography from 'material-ui/Typography';

import Remove from 'material-ui-icons/Remove';

import LoadingCircle from '../LoadingCircle';

class ChallengesList extends PureComponent {
  render() {
    const { challenges, loading } = this.props;

    return (
      <div>
        {loading ? (
          <LoadingCircle />
        ) : (
          <List>
            {challenges.map(challenge => {
              const firstCompletion = challenge.completions[0];
              return (
                <ListItem key={challenge.id}>
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
      </div>
    );
  }
}

ChallengesList.propTypes = {
  challenges: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

ChallengesList.defaultProps = {
  challenges: [],
  loading: false
};

export default ChallengesList;
