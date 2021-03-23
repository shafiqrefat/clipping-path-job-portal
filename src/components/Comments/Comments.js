import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginLeft: theme.spacing(10),
      marginBottom: theme.spacing(4),
      width: '25ch',
    },
  },
}));
export default function Comments() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField fullWidth
          id="additional-information"
          label="Additional Information"
          multiline
          rows={7}
          variant="outlined"
        />
      </form>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField fullWidth
          id="comments"
          label="Comments"
          multiline
          rows={4}
          variant="outlined"
        />
      </form>
    </div>
  );
};