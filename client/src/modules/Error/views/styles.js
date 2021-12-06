import { makeStyles } from '@material-ui/core/index';

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
  },
  error: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
}));
