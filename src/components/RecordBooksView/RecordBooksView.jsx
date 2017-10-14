import React, { PureComponent } from 'react';
import classNames from 'classnames';

import Moment from 'react-moment';

import withStyles from 'material-ui/styles/withStyles';

import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import Paper from 'material-ui/Paper';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableCell';
import TableHead from 'material-ui/Table/TableHead';
import TableRow from 'material-ui/Table/TableRow';
import Typography from 'material-ui/Typography';

import AlphaIcon from '../../icons/Alpha';
import BravoIcon from '../../icons/Bravo';

import ParticipationsList from '../ParticipationsList';

class RecordBooksView extends PureComponent {
  state = {
    currentTab: 0
  };

  changeTab = (event, value) => {
    this.setState({ currentTab: value });
  };

  render() {
    const { classes, data, match } = this.props;
    const { currentTab } = this.state;

    return (
      <Paper>
        {data.loading ? (
          <div className={classNames(classes.loadingContainer)}>
            <CircularProgress color="accent" />
          </div>
        ) : (
          <div>
            <AppBar position="static" color="default">
              <Typography
                className={classNames(classes.recordBookTitle)}
                type="headline"
              >
                {data.recordBook.name}
              </Typography>

              <Tabs value={currentTab} onChange={this.changeTab} centered>
                <Tab label="Moments" />
                <Tab label="Participants" />
                <Tab label="Details" />
              </Tabs>
            </AppBar>

            {currentTab === 0 && (
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
            )}

            {currentTab === 1 && (
              <ParticipationsList recordBookId={match.params.id} />
            )}

            {currentTab === 2 && (
              <div>
                <Typography type="subheading">Start Time</Typography>
                <span>{data.recordBook.startTime}</span>
                <Typography type="subheading">End Time</Typography>
                <span>{data.recordBook.endTime}</span>
                <Typography type="subheading">Rush Start Time</Typography>
                <span>{data.recordBook.rushStartTime}</span>
                <Typography type="subheading">Rush End Time</Typography>
                <span>{data.recordBook.rushEndTime}</span>
              </div>
            )}
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

export default withStyles(styles)(RecordBooksView);
