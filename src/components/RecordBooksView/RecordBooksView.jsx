import React, { PureComponent } from 'react';
import classNames from 'classnames';

import Moment from 'react-moment';

import withStyles from 'material-ui/styles/withStyles';

import AppBar from 'material-ui/AppBar';
import Card, { CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import { FormControlLabel } from 'material-ui/Form';
import Paper from 'material-ui/Paper';
import Switch from 'material-ui/Switch';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import recordBooksViewQuery from '../../queries/recordBooksViewQuery';

import ChallengesListContainer from '../../containers/ChallengesListContainer';

import LoadingCircle from '../LoadingCircle';
import CompletionsList from '../CompletionsList';
import ParticipationsList from '../ParticipationsList';

class RecordBooksView extends PureComponent {
  state = { currentTab: this.props.currentTab || 0 };

  changeTab = (event, value) => {
    this.setState({ currentTab: value });
  };

  onPublish = event => {
    const recordBook = this.props.data.recordBook;
    this.props.mutate({
      variables: {
        id: recordBook.id,
        published: !recordBook.published
      },
      refetchQueries: [
        {
          query: recordBooksViewQuery,
          variables: { recordBookId: recordBook.id }
        }
      ]
    });
  };

  onRushWeekActivate = event => {
    const recordBook = this.props.data.recordBook;
    this.props.mutate({
      variables: {
        id: recordBook.id,
        rushWeekActive: !recordBook.rushWeekActive
      },
      refetchQueries: [
        {
          query: recordBooksViewQuery,
          variables: { recordBookId: recordBook.id }
        }
      ]
    });
  };

  renderTimeRow(subheading, datetime) {
    const { classes } = this.props;

    return (
      <div className={classNames(classes.cardTextContainer)}>
        <Typography
          className={classNames(classes.cardTextStart)}
          type="subheading"
        >
          Start Time
        </Typography>

        <Typography
          className={classNames(classes.cardTextMid)}
          type="subheading"
        >
          <Moment format="M/D/YYYY">{datetime}</Moment>
        </Typography>

        <Typography
          className={classNames(classes.cardTextEnd)}
          type="subheading"
        >
          <Moment format="h:mma">{datetime}</Moment>
        </Typography>
      </div>
    );
  }

  render() {
    const { classes, data, match } = this.props;
    const { currentTab } = this.state;

    const recordBookId = parseInt(match.params.id, 10);

    return (
      <div>
        {data.loading ? (
          <LoadingCircle />
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
                <Tab label="Challenges" />
                <Tab label="Participants" />
                <Tab label="Details" />
              </Tabs>
            </AppBar>

            {currentTab === 0 && (
              <Paper>
                <CompletionsList recordBookId={recordBookId} />
              </Paper>
            )}

            {currentTab === 1 && (
              <Paper>
                <ChallengesListContainer recordBookId={recordBookId} />
              </Paper>
            )}

            {currentTab === 2 && (
              <Paper>
                <ParticipationsList recordBookId={recordBookId} />
              </Paper>
            )}

            {currentTab === 3 && (
              <div className={classNames(classes.cardContainer)}>
                <Card className={classNames(classes.cardSizing)} raised>
                  <CardContent>
                    <div className={classNames(classes.cardHeader)}>
                      <Typography type="title">Timing</Typography>

                      <FormControlLabel
                        control={<Switch checked={data.recordBook.published} />}
                        onChange={this.onPublish}
                        label="Published"
                      />
                    </div>

                    <Divider />

                    {this.renderTimeRow(
                      'Start Time',
                      data.recordBook.startTime
                    )}

                    {this.renderTimeRow('End Time', data.recordBook.endTime)}
                  </CardContent>
                </Card>

                <Card className={classNames(classes.cardSizing)} raised>
                  <CardContent>
                    <div className={classNames(classes.cardHeader)}>
                      <Typography type="title">Rush Week</Typography>

                      <FormControlLabel
                        control={
                          <Switch checked={data.recordBook.rushWeekActive} />
                        }
                        onChange={this.onRushWeekActivate}
                        label="On"
                      />
                    </div>

                    <Divider />

                    {this.renderTimeRow(
                      'Start Time',
                      data.recordBook.rushStartTime
                    )}

                    {this.renderTimeRow(
                      'End Time',
                      data.recordBook.rushEndTime
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const styles = theme => ({
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  cardHeader: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardSizing: {
    margin: theme.spacing.unit,
    minWidth: 350
  },
  cardTextContainer: {
    alignItems: 'center',
    display: 'flex',
    margin: [theme.spacing.unit, 0]
  },
  cardTextEnd: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end'
  },
  cardTextMid: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  },
  cardTextStart: {
    flex: 1
  },
  recordBookTitle: {
    padding: [10, 20]
  }
});

export default withStyles(styles)(RecordBooksView);
