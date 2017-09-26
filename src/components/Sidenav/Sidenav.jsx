import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import AddIcon from 'material-ui-icons/Add';
import InboxIcon from 'material-ui-icons/Inbox';

import { recordBooksGet } from '../../actions/recordBooks';
import { sidenavToggle } from '../../actions/sidenav';

class Sidenav extends Component {
  componentWillMount() {
    this.props.recordBooksGet();
  }

  render() {
    const { currentUser, onLinkClick, recordBooks } = this.props;
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

        {currentUser &&
          currentUser.attributes.admin && (
            <Link to="/records/new" className="button-link">
              <ListItem button onClick={() => onLinkClick()}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Record Book" />
              </ListItem>
            </Link>
          )}

        <Divider />

        <Link to="/members" className="button-link">
          <ListItem button onClick={() => onLinkClick()}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Member List" />
          </ListItem>
        </Link>

        {currentUser && (
          <div>
            <Divider />

            <Link to="/logout" className="button-link">
              <ListItem button onClick={() => onLinkClick()}>
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
    recordBooks: state.recordBooks.recordBooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLinkClick: () => {
      dispatch(sidenavToggle(false));
    },
    recordBooksGet: () => {
      dispatch(recordBooksGet());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidenav);
