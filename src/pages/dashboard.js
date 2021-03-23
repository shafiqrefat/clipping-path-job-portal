import { makeStyles } from "@material-ui/core";
import OutlinedCard from "../components/Card/Card";
import RightOutlinedCard from '../components/RightBarCard/RightBarCard'
import Demo from "../components/DashboardChart/demo";
import PieChart from "../components/PieChart/PieChart";
import Grid from '@material-ui/core/Grid';


const useStyle = makeStyles({
    wrapper: {
        width: '100%',
        height: 'auto',
        display: 'flex',
    },
    OutlinedCard: {
        width: '100%',
        margin:'30px 0px 15px 20px',
        display: 'flex',
        flexFlow: 'wrap column',
    },
    pieChart: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '15px 15px',
        height: '50px',
    },
    rightOutlineBar: {
        margin: '15px 25px',
    }
});

export default function Dashboard() {
    const classes = useStyle()
    return (
        <Grid container style={{backgroundColor: '#F2F2F2'}}>
            <Grid item xs={2} className={classes.pieChart}>
                <PieChart></PieChart>
            </Grid>
            <Grid item xs={7} className={classes.OutlinedCard}>
                <OutlinedCard></OutlinedCard>
                <Demo></Demo>
            </Grid>
            <Grid item xs={2} className={classes.rightOutlineBar}>
                <RightOutlinedCard></RightOutlinedCard>
            </Grid>
        </Grid>
    )
}