import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { TextAreaField } from '../../FormGenerator/types';

interface Props {
  field: TextAreaField;
  control: any;
}

const TextAreaComponent: React.FC<Props> = ({ field, control }) => {
  return (
    <Controller
      name={field.name}
      control={control}
      defaultValue=""
      rules={field.validation}
      render={({ field: controllerField, fieldState }) => (
        <TextField
          fullWidth
          margin="normal"
          multiline
          rows={field.rows || 3}
          label={field.label}
          placeholder={field.placeholder}
          required={field.required}
          {...controllerField}
          error={!!fieldState.error}
          helperText={fieldState.error?.message || field.helperText}
        />
      )}
    />
  );
};

export default TextAreaComponent;
