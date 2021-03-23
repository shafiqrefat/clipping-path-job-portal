import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox, Grid, ListItemIcon, TextField, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        marginLeft: '20px',
        backgroundColor:'#F2F2F2',
    },
    others: {
        '& > *': {
            margin: theme.spacing(2),
            width: '25ch',
        },
    },
    halfWidth: {
        width: "50%"
    }
}));


export default function InsetList() {
    const classes = useStyles();
    const Instructions = [...Array(14).keys()].map(i => i);
    const ImageTypes = ["JPG", "PNG", "PSD", "TIFF", "EPS", "AI", "SVG"]
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <Grid container direction="row" justify="center">
            {/* Instruction */}
            <Grid item md={8} xs={12}>
                <TextField id="standard-basic" label="Job Title" variant="outlined" style={{marginLeft:'25px',width:'40%'}} />
                <Typography style={{ color: 'red', margin: '30px' }}>Instructions:</Typography>
                <List className={classes.root} aria-label="contacts">
                    {Instructions.map((value) => {
                        const labelId = `checkbox-list-label-${value}`;
                        return (
                        <ListItem component={"li"} className={classes.halfWidth} key={value} role={undefined} dense button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`Clippling ${value + 1}`} />
                        </ListItem>)
                    })}
                </List>
            </Grid>

            {/* Return Format */}
            <Grid item md={4} xs={12}>
                <TextField id="filled-basic" label="Due Date Time" variant="outlined" style={{marginLeft:'15px',width:'80%'}}/>
                <Typography style={{ color: 'red', margin: '30px', display: 'flex', alignContent: 'flex-end' }}>Return Formats</Typography>
                <List className={classes.root} aria-label="contacts">
                    {ImageTypes.map((ImageType) => (
                        <ListItem key={ImageType}>
                            <Checkbox/>
                            <ListItemText primary={ImageType} />
                        </ListItem>
                    ))}
                    <List>
                        <ListItem >
                            <Checkbox/>
                            <ListItemText primary="Others" />
                        </ListItem>
                        <ListItem>
                            <TextField label="Others" variant="outlined"></TextField>
                        </ListItem>
                    </List>
                </List>
            </Grid>
        </Grid>
    );
}