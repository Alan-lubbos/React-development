import React from 'react';
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { RadioField } from '../../FormGenerator/types';

interface Props {
  field: RadioField;
  value: string;
  onChange: (name: string, value: string) => void;
}

const RadioComponent: React.FC<Props> = ({ field, value, onChange }) => {
  return (
    <div>
      <FormLabel component="legend">{field.label}</FormLabel>
      <RadioGroup
        name={field.name}
        value={value || ''}
        onChange={(e) => onChange(field.name, e.target.value)}
      >
        {field.options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioComponent;
