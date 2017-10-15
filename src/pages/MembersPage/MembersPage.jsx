import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';
import tableStyles from '../../styles/table';

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import PersonAddIcon from 'material-ui-icons/PersonAdd';

import UsersList from '../../components/UsersList';

class MembersPage extends PureComponent {
  render() {
    const { classes } = this.props;
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

          <UsersList />
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

export default withStyles(styles)(MembersPage);
