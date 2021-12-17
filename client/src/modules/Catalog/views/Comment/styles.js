import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    comment: {
        display: 'flex',
        flexDirection: 'row',
        
    },
    image: {
        margin: "10px 5px 10px 10px",
        borderRadius: "50%",
    },
    username: {
        margin: '12px 5px 12px 0px'
    },
    text: {
        margin: '18px 5px 12px 0px'
    }
});

export default useStyles;