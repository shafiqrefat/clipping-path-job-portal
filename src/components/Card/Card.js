import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import statusCards from '../data'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'


const useStyles = makeStyles({
    title: {
        color: 'white',
        textAlign: 'center'
    },
    number: {
        fontSize: '20pt',
        color: 'white',
        textAlign: 'center'
    }
});

export default function OutlinedCard() {
    const classes = useStyles();
    return (
        <GridList cellHeight={"auto"} className={classes.gridList} cols={4} spacing={10}>
            {statusCards.map((row) => (
                <GridListTile key={row.status} cols={row.cols || 1}>
                    <Card style={{ backgroundColor: row.color }} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title}>
                                {row.status}
                            </Typography>
                            <Typography className={classes.number}>
                                {row.value}
                            </Typography>
                        </CardContent>
                    </Card>
                </GridListTile>
            ))}
        </GridList>
    )
}