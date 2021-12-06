import { makeStyles } from '@material-ui/core/index';

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
    },
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
  },
  logo: {
    marginRight: '80%',
    height: '50px',
    width: '50px',
    cursor: 'pointer',
  },
  title: {
    margin: `${theme.spacing(2)}px 0`,
    fontSize: '18px',
  },
  avatar: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    margin: `0 6px`,
  },
  button: {
    color: 'inherit',
  },
}));
