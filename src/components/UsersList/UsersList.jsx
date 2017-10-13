import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';
import tableStyles from '../../styles/table';

import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemAvatar from 'material-ui/List/ListItemAvatar';
import ListItemText from 'material-ui/List/ListItemText';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import AccountBoxIcon from 'material-ui-icons/AccountBox';
import PersonAddIcon from 'material-ui-icons/PersonAdd';

import usersListQuery from './usersListQuery';

class UsersList extends PureComponent {
  render() {
    const { classes, data } = this.props;
    return (
      <div>
        <Paper className={classNames(classes.paper)}>
          <Typography
            className={classNames(classes.listHeaderTitle)}
            type="subheading"
          >
            MEMBER LIST
          </Typography>
          <Typography
            className={classNames(classes.listHeaderBody)}
            paragraph={true}
            type="body1"
          >
            List of all Cathartes clan members & applicants
          </Typography>
          <hr className={classNames(classes.hr)} />

          {data.loading ? (
            <div className={classNames(classes.loadingContainer)}>
              <CircularProgress color="accent" />
            </div>
          ) : (
            <List>
              {data.users.map(user => {
                return (
                  <ListItem key={user.id}>
                    <ListItemAvatar>
                      <Avatar>
                        <AccountBoxIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.discordName.toUpperCase()}
                      secondary={user.email}
                    />
                  </ListItem>
                );
              })}
            </List>
          )}
        </Paper>

        <Button
          aria-label="Add Member"
          color="accent"
          className={classNames(classes.addButton)}
          component={Link}
          fab
          to="/members/new"
        >
          <PersonAddIcon />
        </Button>
      </div>
    );
  }
}

const styles = theme => {
  const table = tableStyles(theme);
  return {
    ...table,
    addButton: {
      bottom: 0,
      margin: 16,
      position: 'absolute',
      right: 0
    },
    loadingContainer: {
      display: 'flex',
      padding: 30,
      justifyContent: 'center'
    }
  };
};

export default graphql(usersListQuery)(withStyles(styles)(UsersList));
