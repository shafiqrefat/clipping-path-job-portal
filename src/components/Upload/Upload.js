import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, GridList, GridListTile, Typography } from '@material-ui/core';
import PaperCard from './UploadData';
import Button from '@material-ui/core/Button'
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
      <Grid item md={8} >
        <Grid container>
          <Grid item>
            <Typography variant="h5" gutterBottom={true}>Job ID: Job_2021_01_004501</Typography>
          </Grid>
          <Grid item>
            <input accept="image/*" hidden id="raised-button-file" multiple type="file" />
            <label htmlFor="raised-button-file">
              <Button variant="raised" component="span" className={classes.buttonStyle}>
                Choose Files
              </Button>
            </label>
          </Grid>
        </Grid>
        <GridList cols={9} className={classes.gridStyle}>
          {PaperCard.slice(0,27).map((paper, key) => (
            <GridListTile key={key} cols={1}>
              <img src={paper.img} alt={paper.title} style={{ height: '150px' }} />
            </GridListTile>
          ))}
        </GridList>
        <Button className={classes.chooseButtonStyle}>Choose Sample</Button>

        <GridList cols={9} className={classes.gridStyle}>
          {PaperCard.slice(0, 5).map((paper, key) => (
            <GridListTile key={key} cols={1}>
              <img src={paper.img} alt={paper.title} style={{ height: '150px' }} />
            </GridListTile>
          ))}
        </GridList>
      </Grid>

      <Grid item md={4}>
        <div className={classes.verticalLine}>
          <div className={classes.typographyStyle}>
            <Typography align="center" variant="h5">Upload By FTP</Typography>
            <Typography variant="h6" gutterBottom={true}>Upload Files</Typography>
            <Typography>STEP 1: Login your FTP.</Typography>
            <Typography>STEP 2: Go to `/Job_2021_01_004501/Original`/directory.</Typography>
            <Typography>STEP 3: Upload Your Images</Typography>
          </div>
        </div>

        <Typography style={{ marginLeft: "20px" }}>OR</Typography>

        <div className={classes.verticalLine}>
          <div className={classes.typographyStyle}>
            <Typography variant="h6" gutterBottom={true}>Upload Sample</Typography>
            <Typography>STEP 1: Login your FTP.</Typography>
            <Typography>STEP 2: Go to `/Job_2021_01_004501/Original`/directory.</Typography>
            <Typography>STEP 3: Upload Your Images</Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}