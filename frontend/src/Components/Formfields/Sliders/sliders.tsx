import React from 'react';
import { Controller } from 'react-hook-form';
import { FormLabel, Slider as MUISlider } from '@mui/material';
import { SliderField } from '../../FormGenerator/types';

interface Props {
  field: SliderField;
  control: any;
}

const SliderComponent: React.FC<Props> = ({ field, control }) => {
  return (
    <div style={{ marginTop: 16 }}>
      <FormLabel>{field.label}</FormLabel>
      <Controller
        name={field.name}
        control={control}
        defaultValue={field.min}
        rules={field.validation}
        render={({ field: controllerField }) => (
          <MUISlider
            {...controllerField}
            value={controllerField.value || field.min}
            onChange={(_, newValue) => controllerField.onChange(newValue)}
            min={field.min}
            max={field.max}
            step={field.step || 1}
            valueLabelDisplay="auto"
          />
        )}
      />
    </div>
  );
};

export default SliderComponent;
