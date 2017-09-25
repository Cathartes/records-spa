import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import InboxIcon from 'material-ui-icons/Inbox';

import { recordBooksGet } from '../../actions/recordBooks';
import { sidenavToggle } from '../../actions/sidenav';

class Sidenav extends Component {
  componentWillMount() {
    this.props.recordBooksGet();
  }

  render() {
    const { currentUser, onLogoutClick, recordBooks } = this.props;
    return (
      <List>
        {currentUser && (
          <div>
            <ListItem>
              <ListItemText primary={currentUser.attributes.email} />
            </ListItem>

            <Divider />
          </div>
        )}

        {recordBooks.map(recordBook => {
          return (
            <ListItem button key={recordBook.id}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={recordBook.attributes.name} />
            </ListItem>
          );
        })}

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

        {currentUser && (
          <div>
            <Divider />

            <Link to="/logout" className="button-link">
              <ListItem button onClick={() => onLogoutClick()}>
                <ListItemText primary="Log Out" />
              </ListItem>
            </Link>
          </div>
        )}
      </List>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    recordBooks: state.recordBooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogoutClick: () => {
      dispatch(sidenavToggle(false));
    },
    recordBooksGet: () => {
      dispatch(recordBooksGet());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidenav);
