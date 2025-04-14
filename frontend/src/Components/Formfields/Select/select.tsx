import React from 'react';
import { Controller } from 'react-hook-form'; // Import Controller
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectField } from '../../FormGenerator/types';

interface Props {
  field: SelectField;
  control: any; // control from react-hook-form
}

const SelectComponent: React.FC<Props> = ({ field, control }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{field.label}</InputLabel>
      <Controller
        name={field.name} // the name should match the field's name
        control={control}  // passing the control from useForm hook
        defaultValue=""    // make sure to have a default value
        render={({ field: { onChange, value } }) => (
          <Select
            value={value || ''} // the value from react-hook-form
            label={field.label}
            onChange={(e) => onChange(e.target.value)}  // update value via react-hook-form's onChange
          >
            {field.options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default SelectComponent;
