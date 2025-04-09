import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { SelectField } from '../../FormGenerator/types';

interface Props {
  field: SelectField;
  value: string;
  onChange: (name: string, value: string) => void;
}

const SelectComponent: React.FC<Props> = ({ field, value, onChange }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{field.label}</InputLabel>
      <Select
        name={field.name}
        value={value || ''}
        label={field.label}
        onChange={(e) => onChange(field.name, e.target.value)}
      >
        {field.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
