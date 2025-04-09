// src/FormGenerator/FormGenerator.tsx
import React from 'react';
import { FieldType, FormField } from './types';
import TextFieldComponent from '../Formfields/TextField/textfiled';
import CheckboxComponent from '../Formfields/Checkbox/checkbox';
import RadioComponent from '../Formfields/Radiobutton/radiobutton';
import SelectComponent from '../Formfields/Select/select';
import SwitchComponent from '../Formfields/Switch/switch';
import SliderComponent from '../Formfields/Sliders/sliders';
import TextAreaComponent from '../Formfields/TextArea/textarea';

interface FormGeneratorProps {
  fields: FormField[];
  values: { [key: string]: any };
  onChange: (name: string, value: any) => void;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ fields, values, onChange }) => {
  return (
    <form>
      {fields.map((field) => {
        switch (field.type) {
          case FieldType.TEXTFIELD:
            return (
              <TextFieldComponent 
                key={field.name} 
                field={field} 
                value={values[field.name]} 
                onChange={onChange} 
              />
            );

            case FieldType.TEXTAREA:
              return (
                <TextAreaComponent
                  key={field.name}
                  field={field}
                  value={values[field.name]}
                  onChange={onChange}
                />
              );
            
            

          case FieldType.CHECKBOX:
            return (
              <CheckboxComponent 
                key={field.name} 
                field={field} 
                value={values[field.name]} 
                onChange={onChange} 
              />
            );

          case FieldType.RADIO:
            return (
              <RadioComponent 
                key={field.name} 
                field={field} 
                value={values[field.name]} 
                onChange={onChange} 
              />
            );

          case FieldType.SELECT:
            return (
              <SelectComponent 
                key={field.name} 
                field={field} 
                value={values[field.name]} 
                onChange={onChange} 
              />
            );

          case FieldType.SWITCH:
            return (
              <SwitchComponent 
                key={field.name} 
                field={field} 
                value={values[field.name]} 
                onChange={onChange} 
              />
            );

          case FieldType.SLIDER:
            return (
              <SliderComponent 
                key={field.name} 
                field={field} 
                value={values[field.name]} 
                onChange={onChange} 
              />
            );

          default:
            return null;
        }
      })}
    </form>
  );
};

export default FormGenerator;
