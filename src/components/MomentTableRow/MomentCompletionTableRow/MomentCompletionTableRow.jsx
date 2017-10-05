import React, { PureComponent } from 'react';
import classNames from 'classnames';

import Moment from 'react-moment';

import withStyles from 'material-ui/styles/withStyles';

import TableCell from 'material-ui/Table/TableCell';
import TableRow from 'material-ui/Table/TableRow';

import AlphaIcon from '../../../icons/Alpha';
import BravoIcon from '../../../icons/Bravo';

class MomentCompletionTableRow extends PureComponent {
  render() {
    const { classes, completion, moment, participation, user } = this.props;
    return (
      <TableRow
        className={classNames(
          this.backgroundClassFromStatus(completion, classes)
        )}
      >
        <TableCell className={classNames(classes.momentType)}>
          {moment.attributes.moment_type.replace('_', ' ')}
        </TableCell>
        <TableCell>
          <Moment format="M/D h:mma">{moment.attributes.created_at}</Moment>
        </TableCell>
        <TableCell>{user.attributes.discord_name}</TableCell>
        <TableCell>{completion.attributes.points}</TableCell>
        <TableCell>
          {this.iconForTeam(participation.relationships.team.data)}
        </TableCell>
      </TableRow>
    );
  }

  backgroundClassFromStatus(completion, classes) {
    switch (completion.attributes.status) {
      case 'approved':
        return classes.backgroundApproved;
      case 'declined':
        return classes.backgroundDeclined;
      default:
        return '';
    }
  }

  iconForTeam(team) {
    switch (team.attributes.name) {
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
  backgroundApproved: {
    backgroundColor: '#558B2F'
  },
  backgroundDeclined: {
    backgroundColor: theme.palette.error['800']
  },
  momentType: {
    textTransform: 'capitalize'
  }
});

export default withStyles(styles)(MomentCompletionTableRow);
