import * as React from 'react';

import { createStyleSheet, withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import DeleteIconButton from '../DeleteButton/DeleteIconButton';

const styleSheet = createStyleSheet(theme => ({
  paper: {
    margin: theme.spacing.unit
  },
  tableCellName: {
    width: '50%'
  }
}));

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

export default withStyles(styleSheet)(ChallengeTable);
