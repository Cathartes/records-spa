import * as React from 'react';
import * as classNames from 'classnames';

import withStyles from 'material-ui/styles/withStyles';
import { Theme } from 'material-ui/styles/createMuiTheme';

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemAvatar from 'material-ui/List/ListItemAvatar';
import ListItemSecondaryAction from 'material-ui/List/ListItemSecondaryAction';
import ListItemText from 'material-ui/List/ListItemText';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import AccountBoxIcon from 'material-ui-icons/AccountBox';
import FolderIcon from 'material-ui-icons/Folder';

const styles = (theme: Theme) => ({
  paper: {
    margin: theme.spacing.unit
  },
  listHeaderTitle: {
    padding: '16px'
  },
  listHeaderBody: {
    padding: '0 16px'
  },
  hr: {
    width: 'calc(100% - 32px)'
  }
});

type TeamStandingsListClasses = {
  paper: string,
  listHeaderTitle: string,
  listHeaderBody: string,
  hr: string
};

type TeamStandingsListProps = {
  team: {
    id: number,
    name: string
  },
  challenges: {
    id: number,
    name: string
  }[]
};

class TeamStandingsList extends React.PureComponent<TeamStandingsListProps & { classes: TeamStandingsListClasses }> {
  render() {
    const { challenges, classes, team } = this.props;
    return (
      <Paper className={classNames(classes.paper)}>
        <Typography type="subheading" className={classNames(classes.listHeaderTitle)}>
          {team.name}
        </Typography>
        <Typography paragraph={true} type="body1" className={classNames(classes.listHeaderBody)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris vitae egestas mauris.
        </Typography>
        <hr className={classNames(classes.hr)} />
        <List>
          {challenges.map(challenge => {
            return (
              <ListItem key={challenge.id}>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={challenge.name.toUpperCase()} secondary="[Member Name Here]" />
                <ListItemSecondaryAction>
                  <Avatar>
                    <AccountBoxIcon />
                  </Avatar>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    );
  }
}

export default withStyles<TeamStandingsListProps>(styles)(TeamStandingsList);
