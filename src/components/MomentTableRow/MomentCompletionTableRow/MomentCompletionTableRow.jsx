import React, { PureComponent } from 'react';
import classNames from 'classnames';

import Moment from 'react-moment';

import withStyles from 'material-ui/styles/withStyles';

import TableCell from 'material-ui/Table/TableCell';
import TableRow from 'material-ui/Table/TableRow';

const styles = theme => ({
  momentType: {
    textTransform: 'capitalize'
  }
});

class MomentCompletionTableRow extends PureComponent {
  render() {
    const { classes, completion, moment, user } = this.props;
    return (
      <TableRow>
        <TableCell className={classNames(classes.momentType)}>
          {moment.attributes.moment_type.replace('_', ' ')}
        </TableCell>
        <TableCell>
          <Moment format="M/D h:ma">{moment.attributes.created_at}</Moment>
        </TableCell>
        <TableCell>{user.attributes.discord_name}</TableCell>
        <TableCell>{completion.attributes.points}</TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(MomentCompletionTableRow);
