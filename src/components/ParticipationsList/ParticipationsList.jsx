import React, { PureComponent } from 'react';
import classNames from 'classnames';

import withStyles from 'material-ui/styles/withStyles';

import CircularProgress from 'material-ui/Progress/CircularProgress';
import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableCell';
import TableHead from 'material-ui/Table/TableHead';
import TableRow from 'material-ui/Table/TableRow';

import AlphaIcon from '../../icons/Alpha';
import BravoIcon from '../../icons/Bravo';

class ParticipationsList extends PureComponent {
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
                <TableCell>Name</TableCell>
                <TableCell>Team</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.participations.map(participation => {
                return (
                  <TableRow key={participation.id}>
                    <TableCell className={classNames(classes.membershipType)}>
                      {participation.user.membershipType.replace('_', ' ')}
                    </TableCell>
                    <TableCell>{participation.user.discordName}</TableCell>
                    <TableCell>
                      {this.iconForTeam(participation.team.name)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
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
  loadingContainer: {
    display: 'flex',
    padding: 30,
    justifyContent: 'center'
  },
  membershipType: {
    textTransform: 'capitalize'
  },
  recordBookTitle: {
    padding: [10, 20]
  }
});

export default withStyles(styles)(ParticipationsList);
