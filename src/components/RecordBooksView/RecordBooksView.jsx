import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { gql, graphql } from 'react-apollo';

import Moment from 'react-moment';

import withStyles from 'material-ui/styles/withStyles';

import CircularProgress from 'material-ui/Progress/CircularProgress';
import Paper from 'material-ui/Paper';
import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableCell';
import TableHead from 'material-ui/Table/TableHead';
import TableRow from 'material-ui/Table/TableRow';
import Typography from 'material-ui/Typography';

import AlphaIcon from '../../icons/Alpha';
import BravoIcon from '../../icons/Bravo';

class MemberChallengeList extends PureComponent {
  render() {
    const { classes, data } = this.props;
    return (
      <Paper>
        {data.loading ? (
          <div className={classNames(classes.loadingContainer)}>
            <CircularProgress color="accent" />
          </div>
        ) : (
          <div>
            <Typography
              className={classNames(classes.recordBookTitle)}
              type="headline"
            >
              {data.recordBook.name}
            </Typography>

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
                          this.backgroundClassFromStatus(
                            moment.completion.status,
                            classes
                          )
                      )}
                      key={moment.id}
                    >
                      <TableCell className={classNames(classes.momentType)}>
                        {moment.momentType.replace('_', ' ')}
                      </TableCell>
                      <TableCell>
                        <Moment format="M/D h:mma">{moment.createdAt}</Moment>
                      </TableCell>
                      <TableCell>{moment.user.discordName}</TableCell>
                      <TableCell>
                        {moment.completion ? moment.completion.points : null}
                      </TableCell>
                      <TableCell>
                        {this.iconForTeam(moment.participation.team.name)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </Paper>
    );
  }

  backgroundClassFromStatus(completionStatus, classes) {
    switch (completionStatus) {
      case 'approved':
        return classes.backgroundApproved;
      case 'declined':
        return classes.backgroundDeclined;
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
  loadingContainer: {
    display: 'flex',
    padding: 30,
    justifyContent: 'center'
  },
  recordBookTitle: {
    padding: [10, 20]
  }
});

const recordBookViewQuery = gql`
  query recordBookViewQuery($recordBookId: ID!) {
    moments(recordBookId: $recordBookId) {
      completion {
        points
        status
      }
      createdAt
      id
      momentType
      participation {
        team {
          name
        }
      }
      user {
        discordName
      }
    }
    recordBook(id: $recordBookId) {
      id
      name
    }
  }
`;

export default graphql(recordBookViewQuery, {
  options: props => ({
    variables: {
      recordBookId: props.match.params.id
    }
  })
})(withStyles(styles)(MemberChallengeList));
