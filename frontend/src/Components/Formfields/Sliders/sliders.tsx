import React from 'react';
import { FormLabel, Slider as MUISlider } from '@mui/material';
import { SliderField } from '../../FormGenerator/types';

interface Props {
  field: SliderField;
  value: number;
  onChange: (name: string, value: number) => void;
}

const SliderComponent: React.FC<Props> = ({ field, value, onChange }) => {
  return (
    <div style={{ marginTop: 16 }}>
      <FormLabel>{field.label}</FormLabel>
      <MUISlider
        value={value || field.min}
        onChange={(e, newValue) => onChange(field.name, newValue as number)}
        min={field.min}
        max={field.max}
        step={field.step || 1}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default SliderComponent;
