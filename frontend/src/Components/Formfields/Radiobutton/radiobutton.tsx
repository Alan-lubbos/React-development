import React from 'react';
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { RadioField } from '../../FormGenerator/types';

interface Props {
  field: RadioField;
  control: any;
}

const RadioComponent: React.FC<Props> = ({ field, control }) => {
  return (
    <div>
      <FormLabel component="legend">{field.label}</FormLabel>
      <Controller
        name={field.name}
        control={control}
        defaultValue=""
        rules={field.validation}
        render={({ field: controllerField }) => (
          <RadioGroup {...controllerField}>
            {field.options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        )}
      />
    </div>
  );
};

export default RadioComponent;
