import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import JobListTable from './JobListTable'
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    root: {
        '&>*': {
            margin: theme.spacing(1),
            width: '200px',
            marginTop: '15px'
        }
    },
    buttonStyle: {
        backgroundColor: '#9FCC3B',
        color: '#FFFF',
        marginTop: '25px',
        padding: '20px 60px',
    },
    container: {
        display: "flex",
        flexWrap: "wrap"
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "255px"
      }
}));

export default function JobList() {
    const classes = useStyle();
    const [status, setStatus] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [checkbox, setCheckbox] = React.useState({ urgent: true });

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const checkboxHandleChange = (event) => {
        setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
    };
    return (
        <Grid container style={{ justifyContent: "space-evenly" }}>
            <Grid item >
                <form className={classes.root}>
                    <TextField id="job-id" label="Job Id" variant="outlined"></TextField>
                    <TextField id="job-id" label="Job Title" variant="outlined"></TextField>
                    <FormControl variant="filled">
                        <InputLabel id="dd-status">Status</InputLabel>
                        <Select
                            labelId="dd-status"
                            id="dd-status"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={status}
                            onChange={handleChange}
                        >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value={1}>Pending For Review</MenuItem>
                            <MenuItem value={2}>In progress</MenuItem>
                            <MenuItem value={3}>Reviewing</MenuItem>
                            <MenuItem value={4}>Draft</MenuItem>
                            <MenuItem value={5}>Completed</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField className={classes.textField} variant="outlined"
                        id="datetime-local"
                        label="Posting Date"
                        type="datetime-local"
                        defaultValue="2021-01-24T10:30"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField className={classes.textField} variant="outlined"
                        id="datetime-local"
                        label="Delivery Date"
                        type="datetime-local"
                        defaultValue="2021-01-24T10:30"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checkbox.urgent}
                                onChange={checkboxHandleChange}
                                name="urgent"
                            />
                        }
                        label="Urgent"
                    />
                    <Link to="/job" style={{ textDecoration: 'none' }}>
                        <Button className={classes.buttonStyle}>New Job</Button>
                    </Link>
                    <JobListTable></JobListTable>
                </form>
            </Grid>
            <Grid item>
            </Grid>
        </Grid>
    )
}