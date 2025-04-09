import React from 'react';
import { TextField } from '@mui/material';
import { TextAreaField } from '../../FormGenerator/types';

interface Props {
  field: TextAreaField;
  value: any;
  onChange: (name: string, value: any) => void;
}

const TextAreaComponent: React.FC<Props> = ({ field, value, onChange }) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      multiline
      rows={field.rows || 3}
      name={field.name}
      label={field.label}
      placeholder={field.placeholder}
      required={field.required}
      value={value || ''}
      onChange={(e) => onChange(field.name, e.target.value)}
    />
  );
};

export default TextAreaComponent;
