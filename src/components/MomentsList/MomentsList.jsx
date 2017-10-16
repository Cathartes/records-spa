import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Moment from 'react-moment';

import withStyles from 'material-ui/styles/withStyles';

import Button from 'material-ui/Button';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableCell';
import TableHead from 'material-ui/Table/TableHead';
import TableRow from 'material-ui/Table/TableRow';

import AddIcon from 'material-ui-icons/Add';

import AlphaIcon from '../../icons/Alpha';
import BravoIcon from '../../icons/Bravo';

class MomentsList extends PureComponent {
  render() {
    const { classes, data } = this.props;

    return (
      <div>
        {data.loading ? (
          <div className={classNames(classes.loadingContainer)}>
            <CircularProgress color="accent" />
          </div>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Time Occurred</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Points</TableCell>
                <TableCell>Team</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.moments.map(moment => {
                return (
                  <TableRow
                    className={classNames(
                      moment.completion &&
                        this.backgroundClassFromStatus(moment.completion.status)
                    )}
                    key={moment.id}
                  >
                    <TableCell className={classNames(classes.momentType)}>
                      {moment.momentType.replace('_', ' ')}
                    </TableCell>
                    <TableCell>
                      <Moment format="M/D h:mma">{moment.createdAt}</Moment>
                    </TableCell>
                    <TableCell>
                      {moment.participation.user.discordName}
                    </TableCell>
                    <TableCell>
                      {moment.completion ? moment.completion.points : null}
                    </TableCell>
                    <TableCell>
                      <div>
                        {moment.participation.team &&
                          this.iconForTeam(moment.participation.team.name)}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}

        <Button
          aria-label="Add Completion"
          color="accent"
          component={Link}
          className={classNames(classes.addButton)}
          fab
          to={`/records/${this.props.recordBookId}/completions/new`}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }

  backgroundClassFromStatus(completionStatus) {
    switch (completionStatus) {
      case 'approved':
        return this.props.classes.backgroundApproved;
      case 'declined':
        return this.props.classes.backgroundDeclined;
      default:
        return '';
    }
  }

  iconForTeam(teamName) {
    switch (teamName) {
      case 'Alpha Team':
        return <AlphaIcon />;
      case 'Bravo Team':
        return <BravoIcon />;
      default:
        return null;
    }
  }
}

const styles = theme => ({
  addButton: {
    bottom: 0,
    margin: 16,
    position: 'fixed',
    right: 0
  },
  loadingContainer: {
    display: 'flex',
    padding: 30,
    justifyContent: 'center'
  },
  momentType: {
    textTransform: 'capitalize'
  }
});

export default withStyles(styles)(MomentsList);
