import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, GridList, GridListTile, Typography } from '@material-ui/core';
import PaperCard from '../Upload/UploadData';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: '#F2F2F2'
  },
  gridStyle: {
    backgroundColor: 'white',
  },
  verticalLine: {
    borderLeft: '2px solid gray',
    height: '150px',
    marginLeft: theme.spacing(4)
  },
  typographyStyle: {
    marginLeft: theme.spacing(2),
    color:'gray'
  },
  buttonStyle: {
    marginLeft: theme.spacing(75),
    marginBottom: theme.spacing(2),
    backgroundColor: '#9FCC3B',
    color: 'white',
    padding: '15px 30px',
  },
  chooseButtonStyle: {
    marginLeft: theme.spacing(113),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    backgroundColor: '#9FCC3B',
    color: 'white',
    padding: '15px 30px',
  }
}));


export default function SimplePaper() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item md={12} >
        <Grid container>
          <Grid item>
            <Typography variant="h6" gutterBottom={true} className={classes.typographyStyle}>Reviews</Typography>
          </Grid>
        </Grid>
        <GridList cols={10} className={classes.gridStyle}>
          {PaperCard.map((paper, key) => (
            <GridListTile key={key} cols={1}>
              <img src={paper.img} alt={paper.title} style={{ height: '150px' }} />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
}