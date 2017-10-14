const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20
  },
  formTitle: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  submitButton: {
    marginLeft: 2.5 * theme.spacing.unit,
    marginRight: 2.5 * theme.spacing.unit
  },
  submitContainer: {
    justifyContent: 'flex-end'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

export default styles;
