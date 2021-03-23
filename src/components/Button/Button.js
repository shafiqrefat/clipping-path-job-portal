import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        backgroundColor: '#9FCC3B',
        color: 'white',
        marginLeft: theme.spacing(24),
        marginTop: theme.spacing(4),
        padding: '20px 60px',
        fontWeight: 'bold',
    }
}));

export default function ButtonCustomize() {
    const classes = useStyles();
    return (
        <Button className={classes.buttonStyle} variant="contained" name="Next">Next</Button>
    );
}