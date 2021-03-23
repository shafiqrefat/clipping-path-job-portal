import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Instruction from '../Instruction/Instruction'
import Comments from '../Comments/Comments';
import { Grid } from '@material-ui/core';
import Upload from '../Upload/Upload';
import UploadList from '../UploadList/UploadList'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#F2F2F2',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(5)
  },
  cursorPoint: {
    cursor: 'pointer'
  },
  nextButtonStyle: {
    marginLeft: theme.spacing(185),
    backgroundColor: '#9FCC3B',
    color: 'white',
    padding: '15px 60px',
    marginBottom: theme.spacing(3)
  }
}));

function getSteps() {
  return [0, 1, 2];
}
const steps_map = ["Next", "Next", "Submit"]

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Grid container>
        <Grid item md={7} xs={12}><Instruction></Instruction></Grid>
        <Grid item md={4} xs={12}><Comments></Comments></Grid>
      </Grid>;
    case 1:
      return <Grid container>
        <Upload></Upload>
      </Grid>;
    case 2:
      return <Grid container>
        <UploadList></UploadList>
      </Grid>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function UploadStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const history = useHistory();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep + 1 === steps.length)
        return history.push('/jobs');
        return prevActiveStep + 1
    });
  };
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel style={{ backgroundColor: '#F2F2F2' }}>
        {steps.map((index) => (
          <Step key={index}>
            <StepLabel className={classes.cursorPoint} onClick={() => setActiveStep(index)}></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.typographyStyle}>
        {(
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button variant="contained" onClick={handleNext} className={classes.nextButtonStyle}>
                {steps_map[activeStep]}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
