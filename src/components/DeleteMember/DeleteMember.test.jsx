import DeleteMember from './DeleteMember';

it('renders without crashing', () => {
  expect(JSON.stringify(DeleteMember)).toMatchSnapshot();
});
