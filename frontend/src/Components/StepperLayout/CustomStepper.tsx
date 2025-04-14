import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import { ColorlibConnector } from './ColorlibConnector';
import { ColorlibStepIcon } from './ColorlibStepIcon';

interface CustomStepperProps {
  steps: string[];
  activeStep: number;
}

const CustomStepper: React.FC<CustomStepperProps> = ({ steps, activeStep }) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CustomStepper;
