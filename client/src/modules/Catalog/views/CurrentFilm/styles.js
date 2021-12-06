import { makeStyles } from '@material-ui/core/index';

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
    },
  },
  formBlock: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(8)
},
  media: {
    height: 'auto',
    verticalAlign: 'top',
  },
  content: {
    padding: theme.spacing(3),
    textAlign: 'left',
  },
  title: {
    margin: `${theme.spacing(2)}px 0`,
    fontSize: '20px',
    fontWeight: 'bold',
  },
  subtitle1: {
    margin: `${theme.spacing(2)}px 0`,
    fontSize: '16px',
    fontWeight: 'bold',
    color: theme.palette.secondary.dark,
  },
  subtitle2: {
    margin: `${theme.spacing(2)}px 0`,
    fontSize: '16px',
    fontWeight: 'bold',
    color: theme.palette.common.black,
  },
  text: {
    fontSize: '14px',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  star: {
    display: 'inline-block',
    width: '14px',
    height: '14px',
    margin: `0 4px`,
  },
  updateButton: {
    textTransform: 'none',
    backgroundColor: theme.spacing(3, 0)
},
}));

