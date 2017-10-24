import PermanentConfirmationDialog from './PermanentConfirmationDialog';

it('renders without crashing', () => {
  expect(JSON.stringify(PermanentConfirmationDialog)).toMatchSnapshot();
});
