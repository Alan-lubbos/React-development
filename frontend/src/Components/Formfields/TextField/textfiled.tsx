import React from 'react';
import { TextField } from '@mui/material';
import { useFormContext, FieldValues } from 'react-hook-form';
import { TextField as TextFieldType } from '../../FormGenerator/types';

interface Props {
  field: TextFieldType;
}

const TextFieldComponent: React.FC<Props> = ({ field }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();

  return (
    <TextField
      fullWidth
      margin="normal"
      label={field.label}
      placeholder={field.placeholder}
      error={!!errors[field.name]}
      helperText={errors[field.name]?.message?.toString() || ''}
      {...register(field.name, field.validation)}  
    />
  );
};

export default TextFieldComponent;
