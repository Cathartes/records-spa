import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import withStyles from 'material-ui/styles/withStyles';

import Avatar from 'material-ui/Avatar';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemAvatar from 'material-ui/List/ListItemAvatar';
import ListItemText from 'material-ui/List/ListItemText';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import AccountBoxIcon from 'material-ui-icons/AccountBox';

import { usersGet } from '../../actions/users';

const styles = theme => ({
  paper: {
    margin: theme.spacing.unit
  },
  listHeaderTitle: {
    padding: '16px'
  },
  listHeaderBody: {
    padding: '0 16px'
  },
  loadingContainer: {
    display: 'flex',
    padding: 30,
    justifyContent: 'center'
  },
  hr: {
    width: 'calc(100% - 32px)'
  }
});

class UsersList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(usersGet());
  }

  render() {
    const { classes, users, usersGetRequesting } = this.props;
    return (
      <Paper className={classNames(classes.paper)}>
        <Typography
          type="subheading"
          className={classNames(classes.listHeaderTitle)}
        >
          MEMBER LIST
        </Typography>
        <Typography
          paragraph={true}
          type="body1"
          className={classNames(classes.listHeaderBody)}
        >
          List of all Cathartes clan members & applicants
        </Typography>
        <hr className={classNames(classes.hr)} />

        {usersGetRequesting ? (
          <div className={classNames(classes.loadingContainer)}>
            <CircularProgress color="accent" />
          </div>
        ) : (
          <List>
            {users.map(user => {
              return (
                <ListItem key={user.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountBoxIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.attributes.discord_name.toUpperCase()}
                    secondary={user.attributes.email}
                  />
                </ListItem>
              );
            })}
          </List>
        )}
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    usersGetRequesting: state.users.usersGetRequesting
  };
};

export default connect(mapStateToProps)(withStyles(styles)(UsersList));
