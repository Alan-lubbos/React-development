import React from 'react';
import { FormControlLabel, Switch as MUISwitch } from '@mui/material';
import { SwitchField } from '../../FormGenerator/types';

interface Props {
  field: SwitchField;
  value: boolean;
  onChange: (name: string, value: boolean) => void;
}

const SwitchComponent: React.FC<Props> = ({ field, value, onChange }) => {
  return (
    <FormControlLabel
      control={
        <MUISwitch
          checked={value || false}
          onChange={(e) => onChange(field.name, e.target.checked)}
        />
      }
      label={field.label}
    />
  );
};

export default SwitchComponent;
