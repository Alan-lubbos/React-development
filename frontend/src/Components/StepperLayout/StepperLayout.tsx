// src/StepperLayout.tsx
import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import CustomStepper from './CustomStepper';
import { useForm, FormProvider } from 'react-hook-form';
import FormGenerator from '../FormGenerator/formgenerator';
import { FieldType, FormField } from '../FormGenerator/types';

const steps = ['Basic Info', 'Preferences', 'Confirmation'];

const StepperLayout: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm({ mode: 'onBlur' });
  const { handleSubmit, control, getValues } = methods;

  const allStepsFields: FormField[][] = [
    [
      {
        name: 'name',
        label: 'Name',
        type: FieldType.TEXTFIELD,
        required: true,
        placeholder: 'Your name...',
        validation: {
          required: 'Name is required',
          minLength: {
            value: 3,
            message: 'Name must be at least 3 characters',
          },
        },
      },
      {
        name: 'email',
        label: 'Email',
        type: FieldType.TEXTFIELD,
        required: true,
        placeholder: 'Your email...',
        validation: {
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email format',
          },
        },
      },
    ],
    [
      {
        name: 'subscribe',
        label: 'Subscribe to Newsletter',
        type: FieldType.CHECKBOX,
      },
      {
        name: 'gender',
        label: 'Gender',
        type: FieldType.RADIO,
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ],
        validation: {
          required: 'Please select a gender',
        },
      },
    ],
    [
      {
        name: 'feedback',
        label: 'Feedback',
        type: FieldType.TEXTAREA,
        placeholder: 'Share your thoughts...',
        rows: 4,
      },
    ],
  ];

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  const onSubmit = (data: any) => {
    if (activeStep < steps.length - 1) {
      handleNext();
    } else {
      console.log('Final submission', data);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box sx={{ width: '100%', p: 4 }}>
        <CustomStepper steps={steps} activeStep={activeStep} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGenerator
            fields={allStepsFields[activeStep]}
            values={getValues()}
            onChange={() => {}} // not needed since RHF handles it
            control={control}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" type="submit">
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </form>
        {activeStep === steps.length && (
          <Box sx={{ mt: 2 }}>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        )}
      </Box>
    </FormProvider>
  );
};

export default StepperLayout;
