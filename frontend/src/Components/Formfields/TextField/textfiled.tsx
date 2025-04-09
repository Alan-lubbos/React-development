// src/FormFields/TextField/textfield.tsx
import React from 'react';
import { TextField } from '@mui/material';
import { TextField as TextFieldType } from '../../FormGenerator/types'; 

interface Props {
  field: TextFieldType;
  value: any;
  onChange: (name: string, value: any) => void;
}

const TextFieldComponent: React.FC<Props> = ({ field, value, onChange }) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      name={field.name}
      label={field.label}
      placeholder={field.placeholder} 
      required={field.required}
      value={value || ''}
      onChange={(e) => onChange(field.name, e.target.value)}
    />
  );
};

export default TextFieldComponent;
