import { makeStyles } from '@material-ui/core/index';

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.common.grey,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop: theme.spacing(1),
    width: '50%',
  },
  submit: {
    margin: theme.spacing(3, 0),
  },
  fieldHint: {
    textAlign: 'left',
    fontSize: '14px',
    color: theme.palette.error.main,
  },
  formHint: {
    marginTop: theme.spacing(1),
    textAlign: 'left',
    fontSize: '14px',
    color: theme.palette.common.black,
  },
  link: {
    color: theme.palette.primary.dark,
  },
}));
