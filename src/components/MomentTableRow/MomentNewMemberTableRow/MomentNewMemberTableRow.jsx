import React, { PureComponent } from 'react';
import classNames from 'classnames';

import Moment from 'react-moment';

import withStyles from 'material-ui/styles/withStyles';

import TableCell from 'material-ui/Table/TableCell';
import TableRow from 'material-ui/Table/TableRow';

import AlphaIcon from '../../../icons/Alpha';
import BravoIcon from '../../../icons/Bravo';

class MomentNewMemberTableRow extends PureComponent {
  render() {
    const { classes, moment, participation, user } = this.props;
    return (
      <TableRow>
        <TableCell className={classNames(classes.momentType)}>
          {moment.attributes.moment_type.replace('_', ' ')}
        </TableCell>
        <TableCell>
          <Moment format="M/D h:mma">{moment.attributes.created_at}</Moment>
        </TableCell>
        <TableCell>{user.attributes.discord_name}</TableCell>
        <TableCell />
        <TableCell>
          {this.iconForTeam(participation.relationships.team.data)}
        </TableCell>
      </TableRow>
    );
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
  momentType: {
    textTransform: 'capitalize'
  }
});

export default withStyles(styles)(MomentNewMemberTableRow);
