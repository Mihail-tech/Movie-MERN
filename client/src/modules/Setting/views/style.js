import { makeStyles } from '@material-ui/core/index';

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
        backgroundColor: theme.palette.background.default,
      },
    },
    block: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px'
    },
    updateButton: {
        textTransform: 'none',
        backgroundColor: theme.spacing(3, 0)
    },
    buttonBlock:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
    },
    formBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(8)
    },
    avatarPic: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '150px',
        minHeight: '150px',
        margin: '20px'
    },
    fieldHint: {
        textAlign: 'left',
        fontSize: '14px',
        color: theme.palette.error.main,
    },
    errorMessage: {
        color: 'red'
    }
}));