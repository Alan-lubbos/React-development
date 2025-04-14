// src/TestFormPage.tsx
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form'; // Import useForm and FormProvider
import { FieldType, FormField } from '../FormGenerator/types';
import FormGenerator from '../FormGenerator/formgenerator';

const TestFormPage: React.FC = () => {
  // Initialize form methods
  const methods = useForm();

  // Define initial form values
  const [formValues, setFormValues] = useState<any>({
    textField: '',
    textArea: '',
    checkbox: false,
    radio: '',
    select: '',
    switch: false,
    slider: 0,
  });

  // Define form fields
  const formFields: FormField[] = [
    {
      name: 'textField',
      label: 'Text Field',
      type: FieldType.TEXTFIELD,
      required: true,
      placeholder: 'Enter text...',
    },
    {
      name: 'textArea',
      label: 'Text Area',
      type: FieldType.TEXTAREA,
      required: false,
      placeholder: 'Enter a longer text...',
      rows: 4,
    },
    {
      name: 'checkbox',
      label: 'Checkbox Field',
      type: FieldType.CHECKBOX,
    },
    {
      name: 'radio',
      label: 'Radio Button',
      type: FieldType.RADIO,
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ],
    },
    {
      name: 'select',
      label: 'Select Dropdown',
      type: FieldType.SELECT,
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ],
    },
    {
      name: 'switch',
      label: 'Switch',
      type: FieldType.SWITCH,
      onChange: () => {}
    },
    {
      name: 'slider',
      label: 'Slider',
      type: FieldType.SLIDER,
      min: 0,
      max: 100,
      step: 1,
    },
  ];

  // Handle form field value changes
  const handleFieldChange = (name: string, value: any) => {
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <FormProvider {...methods}> 
      <div style={{ padding: '20px' }}>
        <h1>Test Form</h1>
        <FormGenerator
          fields={formFields}
          values={formValues}
          onChange={handleFieldChange}
          control={methods.control}
        />
        <pre>{JSON.stringify(formValues, null, 2)}</pre>
      </div>
    </FormProvider>
  );
};

export default TestFormPage;
