import * as React from 'react';

import withStyles from 'material-ui/styles/withStyles';
import { Theme } from 'material-ui/styles/createMuiTheme';

import Paper from 'material-ui/Paper';
import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableCell';
import TableHead from 'material-ui/Table/TableHead';
import TableRow from 'material-ui/Table/TableRow';

import DeleteIconButton from '../DeleteButton/DeleteIconButton';

const styles = (theme: Theme) => ({
  paper: {
    margin: theme.spacing.unit
  },
  tableCellName: {
    width: '50%'
  }
});

type ChallengeTableProps = {
  challenges: [{
    id: number,
    name: string,
    points: number
  }],
  classes: {
    paper: string,
    tableCellName: string
  }
};

class ChallengeTable extends React.PureComponent<ChallengeTableProps> {
  render() {
    return (
      <Paper className={this.props.classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={this.props.classes.tableCellName}>
                Challenges
              </TableCell>
              <TableCell numeric={true}/>
              <TableCell />
              <TableCell />
              <TableCell>
                ADD CHALLENGE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.challenges.map(challenge => {
              return (
                <TableRow key={challenge.id}>
                  <TableCell className={this.props.classes.tableCellName}>
                    {challenge.name}
                  </TableCell>
                  <TableCell numeric={true}>
                    {challenge.points}
                  </TableCell>
                  <TableCell>
                    EDIT
                  </TableCell>
                  <TableCell>
                    ACCOMPLISHMENTS
                  </TableCell>
                  <TableCell>
                    <DeleteIconButton />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(ChallengeTable);
