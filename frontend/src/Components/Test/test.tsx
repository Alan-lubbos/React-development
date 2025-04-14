// src/TestForm.tsx
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '@mui/material';
import { FieldType, FormField } from '../FormGenerator/types';
import FormGenerator from '../FormGenerator/formgenerator';

const formFields: FormField[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: FieldType.TEXTFIELD,
    required: true,
    minLength: 3,
    placeholder: 'Enter your first name',
  },
  {
    name: 'email',
    label: 'Email',
    type: FieldType.TEXTFIELD,
    required: true,
    placeholder: 'Enter your email',

  },
  
];

const TestForm: React.FC = () => {
  const methods = useForm({ mode: 'onSubmit' });

  const onSubmit = (data: any) => {
    console.log('Form submitted successfully :', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormGenerator 
          fields={formFields} 
          values={{}} 
          onChange={() => {}} 
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default TestForm;
