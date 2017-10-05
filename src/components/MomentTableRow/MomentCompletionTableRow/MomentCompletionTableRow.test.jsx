import React from 'react';
import ReactDOM from 'react-dom';

import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';

import MomentCompletionTableRow from './MomentCompletionTableRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    completion: {
      attributes: { status: '' }
    },
    moment: {
      attributes: { moment_type: '' }
    },
    participation: {
      relationships: {
        team: {
          data: {
            attributes: {
              name: ''
            }
          }
        }
      }
    },
    user: {
      attributes: {
        discord_name: ''
      }
    }
  };
  ReactDOM.render(
    <Table>
      <TableBody>
        <MomentCompletionTableRow {...props} />
      </TableBody>
    </Table>,
    div
  );
});
