import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface StepContentProps {
  steps: string[];
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
  handleReset: () => void;
  children?: React.ReactNode; //  Add this line
}

const StepContent: React.FC<StepContentProps> = ({
  steps,
  activeStep,
  handleBack,
  handleNext,
  handleReset,
  children, //  Destructure children
}) => {
  return (
    <Box sx={{ mt: 4 }}>
      {activeStep === steps.length ? (
        <>
          <Typography variant="h6" gutterBottom>
            All steps completed!
          </Typography>
          <Button onClick={handleReset}>Reset</Button>
        </>
      ) : (
        <>
          <Typography sx={{ mb: 2 }}>
            Step {activeStep + 1}: {steps[activeStep]}
          </Typography>

          {children && <Box sx={{ mb: 3 }}>{children}</Box>} {/*  Render children */}

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default StepContent;
