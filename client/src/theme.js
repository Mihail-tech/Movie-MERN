import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
  palette: {
    common: {
      white: '#ffffff',
      grey: '#9e9e9e',
      black: '#000000',
    },
    primary: {
      light: '#7bb4e9',
      main: '#1f86e2',
      dark: '#283d50',
    },
    secondary: {
      light: '#efdda7',
      main: '#f4ba08',
      dark: '#362f1a',
    },
    error: {
      main: '#f80e0e', 
    },
    background: {
      paper: '#eeeeee', 
      default: '#ffffff', 
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
