import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { makeStyles} from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import StopIcon from '@material-ui/icons/Stop';
import ProgressStatus from '../data'


const useStyles = makeStyles((theme) =>({
   listItemStyle: {
     paddingTop:'0px',
     paddingBottom: '0px',
     paddingLeft:'13px'
   }
}));
const data = ProgressStatus;
export default function PieChart(){
  // eslint-disable-next-line no-unused-vars
  const [chartData,setChartData] = React.useState(data);
  const classes = useStyles();
    return (
      <Paper style={{height:'700px'}}>
        <Chart
          data={chartData}
        >
          <PieSeries 
            valueField="value"
            argumentField="status"
          />
          <List style={{height:'270px'}} key={data} component="ul" aria-label="contacts">
            {chartData.map((row)=>(
              <ListItem className={classes.listItemStyle}>
                <ListItemIcon key={row.color}>
                  <StopIcon style={{color: row.color}} />
                </ListItemIcon>
                <ListItemText  key={row.status} primary={row.status} />
              </ListItem>
            ))}
          </List>
          <Animation />
        </Chart>
      </Paper>
    )
}
