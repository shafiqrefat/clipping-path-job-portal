import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import cardData from './CardData';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    cardWrapper: {
        width: "80%",
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap '
    },
    row: {
        width: '200px',
        '&:nth-child(1)':{
            width:'150px',
            height:'60px',
            padding: '0px 5px',
            marginLeft: '25px'
        },
        height: '80px',
        margin: '7px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: '20px',
        color: 'white',
    },
    number: {
        fontSize: '20px',
        color: 'white',
        textAlign: 'center'
    }
});


export default function RightBarCard() {
    const classes = useStyles();
    const lists = cardData.map((row) =>
            <Card className={classes.row} style={{backgroundColor:row.color}} variant="outlined">
                <CardContent className={classes.cardContent} >
                    <Typography className={classes.title} color="textSecondary">
                        <Link to="/job" style={{textDecoration:'none',color:'white'}}>
                            {row.title}
                        </Link>
                    </Typography>
                    <Typography className={classes.number} color="textSecondary">
                        {row.status}
                    </Typography>
                    <Typography className={classes.number} color="textSecondary">
                        {row.amount}
                    </Typography>
                </CardContent>
            </Card>
            );
    return (
    <div className={classes.cardWrapper}>
        {lists}
    </div>
    );
}