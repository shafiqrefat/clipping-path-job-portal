import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        marginLeft: theme.spacing(24),
        marginTop: theme.spacing(4)
      },
      '& .MuiTextField-root:first-child': {
        marginLeft: theme.spacing(2)
      },
    }
  }));
  
  export default function Information() {
    const classes = useStyles();
  
    return (
      <Grid sm={6} xs={12} container direction="row">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Job Title" variant="outlined" /> 
          <TextField id="filled-basic" label="Due Date Time" variant="outlined" />
        </form>
      </Grid>
    );
  }