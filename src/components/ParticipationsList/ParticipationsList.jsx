import React, { PureComponent } from 'react';
import classNames from 'classnames';

import withStyles from 'material-ui/styles/withStyles';

import Button from 'material-ui/Button';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import Dialog from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';

import PersonAddIcon from 'material-ui-icons/PersonAdd';

import AlphaIcon from '../../icons/Alpha';
import BravoIcon from '../../icons/Bravo';

import capitalize from '../../helpers/capitalize';

import participationsListQuery from '../../queries/participationsListQuery';

import UsersList from '../UsersList';

class ParticipationsList extends PureComponent {
  state = { dialogOpen: false };

  addParticipants = () => {
    this.props.selectedUsers.forEach(userId => {
      this.props.mutate({
        variables: { recordBookId: this.props.recordBookId, userId: userId },
        refetchQueries: [
          {
            query: participationsListQuery,
            variables: { recordBookId: this.props.recordBookId }
          }
        ]
      });
    });
    this.toggleDialog();
  };

  toggleDialog = () => {
    this.setState({ dialogOpen: !this.state.dialogOpen });
  };

  render() {
    const { classes, data } = this.props;
    const { dialogOpen } = this.state;

    return (
      <div>
        {data.loading ? (
          <div className={classNames(classes.loadingContainer)}>
            <CircularProgress color="accent" />
          </div>
        ) : (
          <List>
            {data.participations.map(participation => {
              return (
                <ListItem key={participation.id}>
                  <ListItemIcon>
                    <div>
                      {participation.team &&
                        this.iconForTeam(participation.team.name)}
                    </div>
                  </ListItemIcon>

                  <ListItemText
                    primary={participation.user.discordName}
                    secondary={capitalize(participation.user.membershipType)}
                  />
                </ListItem>
              );
            })}
          </List>
        )}

        <Button
          aria-label="Add Participant"
          color="accent"
          className={classNames(classes.addButton)}
          fab
          onClick={() => this.toggleDialog()}
        >
          <PersonAddIcon />
        </Button>

        {!data.loading && (
          <Dialog open={dialogOpen} onRequestClose={() => this.toggleDialog()}>
            <DialogTitle>Add Participant</DialogTitle>

            <DialogContent>
              <DialogContentText>
                Add a new user or select from the list below.
              </DialogContentText>
              <UsersList
                disabledUsers={data.participations.map(participation => {
                  return participation.user.id;
                })}
                selectList
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={() => this.addParticipants()} raised>
                Add Participants
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    );
  }

  iconForTeam(teamName) {
    switch (teamName) {
      case 'Alpha Team':
        return <AlphaIcon />;
      case 'Bravo Team':
        return <BravoIcon />;
      default:
        return null;
    }
  }
}

const styles = theme => ({
  addButton: {
    bottom: 0,
    margin: 16,
    position: 'fixed',
    right: 0
  },
  dialogContainer: {
    overflow: 'auto'
  },
  loadingContainer: {
    display: 'flex',
    padding: 30,
    justifyContent: 'center'
  },
  membershipType: {
    textTransform: 'capitalize'
  }
});

export default withStyles(styles)(ParticipationsList);
