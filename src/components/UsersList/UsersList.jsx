import React, { PureComponent } from 'react';

import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemAvatar from 'material-ui/List/ListItemAvatar';
import ListItemText from 'material-ui/List/ListItemText';

import AccountBoxIcon from 'material-ui-icons/AccountBox';

import LoadingCircle from '../LoadingCircle';

class UsersList extends PureComponent {
  constructor(props) {
    super(props);
    if (props.selectList) {
      props.resetSelected();
    }
  }

  onUserClick = userId => () => {
    if (this.props.selectList) {
      this.props.toggleSelected(userId);
    }
  };

  render() {
    const { data, disabledUsers, selectedUsers, selectList } = this.props;

    return (
      <div>
        {data.loading ? (
          <LoadingCircle />
        ) : (
          <List>
            {data.users.map(user => {
              const disabled =
                selectList && disabledUsers.indexOf(user.id) !== -1;
              const checked = disabled || selectedUsers.indexOf(user.id) !== -1;

              return (
                <ListItem
                  button={selectList}
                  disabled={disabled}
                  onClick={this.onUserClick(user.id)}
                  key={user.id}
                >
                  {selectList ? (
                    <Checkbox checked={checked} disableRipple tabIndex={-1} />
                  ) : (
                    <ListItemAvatar>
                      <Avatar>
                        <AccountBoxIcon />
                      </Avatar>
                    </ListItemAvatar>
                  )}

                  <ListItemText
                    primary={user.discordName.toUpperCase()}
                    secondary={user.email}
                  />
                </ListItem>
              );
            })}
          </List>
        )}
      </div>
    );
  }
}

export default UsersList;
