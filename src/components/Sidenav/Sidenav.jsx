import React, { PureComponent } from 'react';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import InboxIcon from 'material-ui-icons/Inbox';

class Sidenav extends PureComponent {
  render() {
    return (
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Season 1" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="New Record Book" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Member List" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Challenges" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Record Timeline" />
        </ListItem>
      </List>
    );
  }
}

export default Sidenav;
