import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import withStyles from 'material-ui/styles/withStyles';

import CircularProgress from 'material-ui/Progress/CircularProgress';
import Paper from 'material-ui/Paper';
import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableCell';
import TableHead from 'material-ui/Table/TableHead';
import TableRow from 'material-ui/Table/TableRow';
import Typography from 'material-ui/Typography';

import { completionsList } from '../../actions/completions';
import { momentsList } from '../../actions/moments';
import { participationsList } from '../../actions/participations';
import { recordBooksView } from '../../actions/recordBooks';

import MomentCompletionTableRow from '../MomentTableRow/MomentCompletionTableRow';
import MomentNewMemberTableRow from '../MomentTableRow/MomentNewMemberTableRow';

class MemberChallengeList extends Component {
  componentWillMount() {
    const { dispatch, match } = this.props;

    dispatch(recordBooksView(match.params.id));

    dispatch(completionsList({ recordBookId: match.params.id }));
    dispatch(
      momentsList({ recordBookId: match.params.id, include: ['trackable'] })
    );
    dispatch(
      participationsList({
        recordBookId: match.params.id,
        include: ['team', 'user']
      })
    );
  }

  render() {
    const { classes, isLoading, moments, recordBook } = this.props;
    return (
      <div>
        <Paper>
          <Typography
            className={classNames(classes.recordBookTitle)}
            type="headline"
          >
            {recordBook ? recordBook.attributes.name : 'Record Book'}
          </Typography>

          {isLoading ? (
            <div className={classNames(classes.loadingContainer)}>
              <CircularProgress color="accent" />
            </div>
          ) : (
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
                {moments.map(moment => {
                  if (moment.attributes.moment_type === 'completion') {
                    return (
                      <MomentCompletionTableRow
                        completion={this.completionForMoment(moment)}
                        key={moment.id}
                        moment={moment}
                        participation={this.participationForMomentCompletion(
                          moment
                        )}
                        user={this.userForMomentCompletion(moment)}
                      />
                    );
                  } else {
                    return (
                      <MomentNewMemberTableRow
                        key={moment.id}
                        moment={moment}
                        participation={this.participationForMomentNewMember(
                          moment
                        )}
                        user={this.userForMomentNewMember(moment)}
                      />
                    );
                  }
                })}
              </TableBody>
            </Table>
          )}
        </Paper>
      </div>
    );
  }

  completionForMoment(moment) {
    return moment.relationships.trackable.data;
  }

  participationForMomentCompletion(moment) {
    const trackable = moment.relationships.trackable.data;
    return this.props.participations.find(p => {
      return p.id === trackable.relationships.participation.data.id;
    });
  }

  participationForMomentNewMember(moment) {
    const trackable = moment.relationships.trackable.data;
    return this.props.participations.find(p => {
      return p.relationships.user.data.id === trackable.id;
    });
  }

  userForMomentCompletion(moment) {
    const participation = this.participationForMomentCompletion(moment);
    return participation.relationships.user.data;
  }

  userForMomentNewMember(moment) {
    return moment.relationships.trackable.data;
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

const mapStateToProps = state => {
  return {
    completions: state.completions.completionsList,
    isLoading:
      state.completions.completionsListRequesting ||
      state.moments.momentsListRequesting ||
      state.participations.participationsListRequesting,
    moments: state.moments.momentsList,
    participations: state.participations.participationsList,
    recordBook: state.recordBooks.recordBooksView
  };
};

export default connect(mapStateToProps)(
  withStyles(styles)(MemberChallengeList)
);
