import React from 'react';
import { Controller } from 'react-hook-form';
import { FormControlLabel, Switch as MUISwitch } from '@mui/material';
import { SwitchField } from '../../FormGenerator/types';

interface Props {
  field: SwitchField;
  control: any;
}

const SwitchComponent: React.FC<Props> = ({ field, control }) => {
  return (
    <Controller
      name={field.name}
      control={control}
      defaultValue={false}
      rules={field.validation}
      render={({ field: controllerField }) => (
        <FormControlLabel
          control={
            <MUISwitch
              checked={controllerField.value}
              onChange={(e) => controllerField.onChange(e.target.checked)}
            />
          }
          label={field.label}
        />
      )}
    />
  );
};

export default SwitchComponent;
