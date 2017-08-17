import * as React from 'react';

import { createStyleSheet, withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import AccountBoxIcon from 'material-ui-icons/AccountBox';
import FolderIcon from 'material-ui-icons/Folder';

const styleSheet = createStyleSheet(theme => ({
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
}));

type MemberChallengeListProps = {
  challenges: [{
    id: number,
    name: string,
    points: number
  }],
  classes: {
    paper: string,
    listHeaderTitle: string,
    listHeaderBody: string,
    hr: string
  }
};

class MemberChallengeList extends React.PureComponent<MemberChallengeListProps> {
  render() {
    return (
      <Paper className={this.props.classes.paper}>
        <Typography type="subheading" className={this.props.classes.listHeaderTitle}>
          MEMBER CHALLENGES
        </Typography>
        <Typography paragraph={true} type="body1" className={this.props.classes.listHeaderBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris vitae egestas mauris.
        </Typography>
        <hr className={this.props.classes.hr} />
        <List>
          {this.props.challenges.map(challenge => {
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

export default withStyles(styleSheet)(MemberChallengeList);
