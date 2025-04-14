import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Controller } from 'react-hook-form';
import { CheckboxField } from '../../FormGenerator/types';

interface Props {
  field: CheckboxField;
  control: any;
}

const CheckboxComponent: React.FC<Props> = ({ field, control }) => {
  return (
    <FormGroup>
      <Controller
        name={field.name}
        control={control}
        defaultValue={false}
        rules={field.validation}
        render={({ field: controllerField }) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={controllerField.value}
                onChange={(e) => controllerField.onChange(e.target.checked)}
              />
            }
            label={field.label}
          />
        )}
      />
    </FormGroup>
  );
};

export default CheckboxComponent;
