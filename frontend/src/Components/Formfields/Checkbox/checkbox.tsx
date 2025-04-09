import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { CheckboxField } from '../../FormGenerator/types';

interface Props {
  field: CheckboxField;
  value: boolean;
  onChange: (name: string, value: boolean) => void;
}

const CheckboxComponent: React.FC<Props> = ({ field, value, onChange }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={!!value}
            onChange={(e) => onChange(field.name, e.target.checked)}
          />
        }
        label={field.label}
      />
    </FormGroup>
  );
};

export default CheckboxComponent;
