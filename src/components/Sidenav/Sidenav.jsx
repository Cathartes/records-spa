import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';

import Collapse from 'material-ui/transitions/Collapse';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';

import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import AddIcon from 'material-ui-icons/Add';
import BookIcon from 'material-ui-icons/Book';
import ClearIcon from 'material-ui-icons/Clear';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import { recordBooksCollapseToggle } from '../../actions/recordBooks';
import { sidenavToggle } from '../../actions/sidenav';

const styles = theme => ({
  expandIcon: {
    color: 'white'
  }
});

class Sidenav extends PureComponent {
  render() {
    const {
      classes,
      currentUser,
      isRecordBooksCollapseOpen,
      onLinkClick,
      onRecordBooksCollapseClick,
      recordBooks
    } = this.props;
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

        <ListItem
          button
          onClick={() => onRecordBooksCollapseClick(!isRecordBooksCollapseOpen)}
        >
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Records" />
          {isRecordBooksCollapseOpen ? (
            <ExpandLessIcon className={classNames(classes.expandIcon)} />
          ) : (
            <ExpandMoreIcon className={classNames(classes.expandIcon)} />
          )}
        </ListItem>

        <Collapse in={isRecordBooksCollapseOpen}>
          {recordBooks.map(recordBook => {
            return (
              <ListItem button key={recordBook.id}>
                <ListItemText inset primary={recordBook.attributes.name} />
              </ListItem>
            );
          })}
        </Collapse>

        {currentUser &&
          currentUser.attributes.admin && (
            <ListItem
              button
              onClick={() => onLinkClick()}
              component={Link}
              to="/records/new"
            >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Record Book" />
            </ListItem>
          )}

        <Divider />

        <ListItem
          button
          onClick={() => onLinkClick()}
          component={Link}
          to="/members"
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Member List" />
        </ListItem>

        {currentUser && (
          <div>
            <Divider />

            <Link to="/logout" className="button-link">
              <ListItem button onClick={() => onLinkClick()}>
                <ListItemIcon>
                  <ClearIcon />
                </ListItemIcon>
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
    isRecordBooksCollapseOpen: state.recordBooks.isRecordBooksCollapseOpen,
    recordBooks: state.recordBooks.recordBooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLinkClick: () => {
      dispatch(sidenavToggle(false));
    },
    onRecordBooksCollapseClick: isRecordBooksCollapseOpen => {
      dispatch(recordBooksCollapseToggle(isRecordBooksCollapseOpen));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Sidenav)
);
