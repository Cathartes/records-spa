import React, { PureComponent } from 'react';
import classNames from 'classnames';

import withStyles from 'material-ui/styles/withStyles';

import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import Paper from 'material-ui/Paper';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import Typography from 'material-ui/Typography';

import MomentsList from '../MomentsList';
import ParticipationsList from '../ParticipationsList';

class RecordBooksView extends PureComponent {
  state = { currentTab: this.props.currentTab || 0 };

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

            {currentTab === 0 && <MomentsList recordBookId={match.params.id} />}

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
