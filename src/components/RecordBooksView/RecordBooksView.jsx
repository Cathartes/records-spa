import React, { PureComponent } from 'react';
import classNames from 'classnames';

import Moment from 'react-moment';

import withStyles from 'material-ui/styles/withStyles';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
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

  onPublishClick = () => {
    const recordBook = this.props.data.recordBook;
    this.props.mutate({
      variables: {
        id: recordBook.id,
        name: recordBook.name,
        published: true,
        startTime: recordBook.startTime,
        endTime: recordBook.endTime,
        rushStartTime: recordBook.rushStartTime,
        rushEndTime: recordBook.rushEndTime
      },
      refetchQueries: [
        {
          query: recordBooksViewQuery,
          variables: { recordBookId: recordBook.id }
        }
      ]
    });
  };

  render() {
    const { classes, data, match } = this.props;
    const { currentTab } = this.state;

    return (
      <Paper>
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
              <CompletionsList recordBookId={match.params.id} />
            )}

            {currentTab === 1 && (
              <ChallengesListContainer recordBookId={match.params.id} />
            )}

            {currentTab === 2 && (
              <ParticipationsList recordBookId={match.params.id} />
            )}

            {currentTab === 3 && (
              <div>
                <Typography type="subheading">Start Time</Typography>
                <Moment format="M/D/YYYY @ h:mma">
                  {data.recordBook.startTime}
                </Moment>
                <Typography type="subheading">End Time</Typography>
                <Moment format="M/D/YYYY @ h:mma">
                  {data.recordBook.endTime}
                </Moment>
                <Typography type="subheading">Rush Start Time</Typography>
                <Moment format="M/D/YYYY @ h:mma">
                  {data.recordBook.rushStartTime}
                </Moment>
                <Typography type="subheading">Rush End Time</Typography>
                <Moment format="M/D/YYYY @ h:mma">
                  {data.recordBook.rushEndTime}
                </Moment>

                <Button
                  disabled={data.recordBook.published}
                  onClick={() => this.onPublishClick()}
                  raised
                >
                  {data.recordBook.published ? 'Published' : 'Publish'}
                </Button>
              </div>
            )}
          </div>
        )}
      </Paper>
    );
  }
}

const styles = theme => ({
  recordBookTitle: {
    padding: [10, 20]
  }
});

export default withStyles(styles)(RecordBooksView);
