import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Moment from 'react-moment';

import withStyles from 'material-ui/styles/withStyles';

import Button from 'material-ui/Button';
import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableCell';
import TableHead from 'material-ui/Table/TableHead';
import TableRow from 'material-ui/Table/TableRow';

import AddIcon from 'material-ui-icons/Add';

import AlphaIcon from '../../icons/Alpha';
import BravoIcon from '../../icons/Bravo';

import LoadingCircle from '../LoadingCircle';

class CompletionsList extends PureComponent {
  render() {
    const { classes, data } = this.props;

    return (
      <div className={classNames(classes.tableContainer)}>
        {data.loading ? (
          <LoadingCircle />
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Challenge Name</TableCell>
                <TableCell>Member</TableCell>
                <TableCell>Time Occurred</TableCell>
                <TableCell>Rank</TableCell>
                <TableCell>Points</TableCell>
                <TableCell>Team</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.completions.map(completion => {
                return (
                  <TableRow key={completion.id}>
                    <TableCell>{completion.challenge.name}</TableCell>
                    <TableCell>
                      {completion.participation.user.discordName}
                    </TableCell>
                    <TableCell>
                      <Moment format="M/D h:mma">{completion.createdAt}</Moment>
                    </TableCell>
                    <TableCell>{completion.rank}</TableCell>
                    <TableCell>{completion.points}</TableCell>
                    <TableCell>
                      <div>
                        {completion.participation.team &&
                          this.iconForTeam(completion.participation.team.name)}
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
  tableContainer: {
    overflow: 'hidden'
  }
});

export default withStyles(styles)(CompletionsList);
