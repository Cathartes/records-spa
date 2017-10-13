import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';

import Collapse from 'material-ui/transitions/Collapse';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';

import AddIcon from 'material-ui-icons/Add';
import BookIcon from 'material-ui-icons/Book';
import ClearIcon from 'material-ui-icons/Clear';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import PeopleIcon from 'material-ui-icons/People';

import recordBooksListQuery from './recordBooksListQuery';
import { recordBooksCollapseToggle } from '../../actions/recordBooks';
import { sidenavToggle } from '../../actions/sidenav';

class Sidenav extends PureComponent {
  render() {
    const {
      classes,
      currentUser,
      data,
      isRecordBooksCollapseOpen,
      onLinkClick,
      onRecordBooksCollapseClick
    } = this.props;
    return (
      <List>
        {currentUser && (
          <ListItem divider>
            <ListItemText primary={currentUser.email} />
          </ListItem>
        )}

        <ListItem
          button
          divider={!isRecordBooksCollapseOpen}
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

        {!data.loading && (
          <Collapse in={isRecordBooksCollapseOpen}>
            {data.recordBooks.map((recordBook, index) => {
              const showDivider = !data.recordBooks[index + 1];
              return (
                <ListItem
                  button
                  component={Link}
                  divider={showDivider}
                  key={recordBook.id}
                  onClick={() => onLinkClick()}
                  to={`/records/${recordBook.id}`}
                >
                  <ListItemText inset primary={recordBook.name} />
                </ListItem>
              );
            })}

            {data.recordBooks.length === 0 && (
              <ListItem divider key={0}>
                <ListItemText inset primary="No records found" />
              </ListItem>
            )}
          </Collapse>
        )}

        {currentUser &&
          currentUser.admin && (
            <ListItem
              button
              component={Link}
              divider
              onClick={() => onLinkClick()}
              to="/records/new"
            >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Record Book" />
            </ListItem>
          )}

        <ListItem
          button
          component={Link}
          divider={currentUser}
          onClick={() => onLinkClick()}
          to="/members"
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Member List" />
        </ListItem>

        {currentUser && (
          <ListItem
            button
            component={Link}
            onClick={() => onLinkClick()}
            to="/logout"
          >
            <ListItemIcon>
              <ClearIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        )}
      </List>
    );
  }
}

const styles = theme => {
  return {
    expandIcon: {
      color: 'white'
    }
  };
};

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    isRecordBooksCollapseOpen: state.recordBooks.isRecordBooksCollapseOpen
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
  graphql(recordBooksListQuery)(withStyles(styles)(Sidenav))
);
