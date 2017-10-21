import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { compose, graphql } from 'react-apollo';

import withStyles from 'material-ui/styles/withStyles';
import tableStyles from '../../styles/table';

import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import AccountBoxIcon from 'material-ui-icons/AccountBox';
import PersonAddIcon from 'material-ui-icons/PersonAdd';

import usersListQuery from '../../queries/usersListQuery';

import UsersAdd from '../../containers/UsersAdd';
import UsersEdit from '../../containers/UsersEdit';

import DeleteMember from '../../components/DeleteMember';
import LoadingCircle from '../../components/LoadingCircle';

class MembersPage extends PureComponent {
  state = { addUser: false, editUser: null };

  filterUsers(users, membershipType) {
    return users.filter(user => {
      return user.membershipType === membershipType;
    });
  }

  setAddUser = addUser => event => {
    this.setState({ addUser: addUser });
  };

  setEditUser = user => event => {
    this.setState({ editUser: user });
  };

  render() {
    const { classes, data } = this.props;
    const { addUser, editUser } = this.state;

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
            List of all Cathartes clan members
          </Typography>
          <hr className={classNames(classes.hr)} />
          {data.loading ? (
            <LoadingCircle />
          ) : (
            <div>
              {this.renderUsersList(
                this.filterUsers(data.users, 'member'),
                data.refetch
              )}
            </div>
          )}
        </Paper>

        <Paper className={classNames(classes.paper)}>
          <Typography
            className={classNames(classes.listHeaderTitle)}
            type="subheading"
          >
            APPLICANT LIST
          </Typography>
          <Typography
            className={classNames(classes.listHeaderBody)}
            paragraph={true}
            type="body1"
          >
            List of all Cathartes clan applicants
          </Typography>
          <hr className={classNames(classes.hr)} />

          {data.loading ? (
            <LoadingCircle />
          ) : (
            <div>
              {this.renderUsersList(
                this.filterUsers(data.users, 'applicant'),
                data.refetch
              )}
            </div>
          )}
        </Paper>

        <Button
          aria-label="Add Member"
          className={classNames(classes.addButton)}
          color="accent"
          fab
          onClick={this.setAddUser(true)}
        >
          <PersonAddIcon />
        </Button>

        {addUser && <UsersAdd open onRequestClose={this.setAddUser(false)} />}

        {editUser && (
          <UsersEdit
            open
            onRequestClose={this.setEditUser(null)}
            user={editUser}
          />
        )}
      </div>
    );
  }

  renderUsersList(users, refetch) {
    return (
      <List>
        {users.map(user => {
          if (
            user.currentUserStatus === 'archived' ||
            user.currentUserStatus === 'deleted'
          ) {
            return null;
          } else {
            return (
              <ListItem button key={user.id} onClick={this.setEditUser(user)}>
                <ListItemAvatar>
                  <Avatar>
                    <AccountBoxIcon />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={user.discordName.toUpperCase()}
                  secondary={user.email}
                />
                {user.admin ? (
                  <div />
                ) : (
                  <DeleteMember id={user.id} refetch={refetch} />
                )}
              </ListItem>
            );
          }
        })}
      </List>
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
      position: 'fixed',
      right: 0
    }
  };
};

export default compose(
  graphql(usersListQuery, {
    options: props => ({ variables: { membershipType: props.membershipType } })
  }),
  withStyles(styles)
)(MembersPage);
