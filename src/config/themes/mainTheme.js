import createMuiTheme from 'material-ui/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    primary: {
      50: '#f7b6b4',
      100: '#f59f9d',
      200: '#f28886',
      300: '#f0716f',
      400: '#ed5b58',
      500: '#eb4441',
      600: '#e92d2a',
      700: '#e11b18',
      800: '#ca1815',
      900: '#b31613',
      A100: '#facccb',
      A200: '#fce3e2',
      A400: '#fefafa',
      A700: '#9c1310',
      contrastDefaultColor: 'dark'
    },
    secondary: {
      50: '#000000',
      100: '#000000',
      200: '#000000',
      300: '#010101',
      400: '#0c0c0f',
      500: '#18181c',
      600: '#303038',
      700: '#3c3c45',
      800: '#474753',
      900: '#535361',
      A100: '#303038',
      A200: '#24242a',
      A400: '#18181c',
      A700: '#5f5f6f',
      contrastDefaultColor: 'light'
    },
    type: 'dark'
  }
});

export default theme;
