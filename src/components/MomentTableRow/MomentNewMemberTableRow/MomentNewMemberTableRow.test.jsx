import React from 'react';
import ReactDOM from 'react-dom';

import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';

import MomentNewMemberTableRow from './MomentNewMemberTableRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
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
        <MomentNewMemberTableRow {...props} />
      </TableBody>
    </Table>,
    div
  );
});
