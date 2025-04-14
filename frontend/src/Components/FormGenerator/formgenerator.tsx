import React from 'react';
import { FieldType, FormField } from './types';
import TextFieldComponent from '../Formfields/TextField/textfiled';
import CheckboxComponent from '../Formfields/Checkbox/checkbox';
import RadioComponent from '../Formfields/Radiobutton/radiobutton';
import SelectComponent from '../Formfields/Select/select';
import SwitchComponent from '../Formfields/Switch/switch';
import SliderComponent from '../Formfields/Sliders/sliders';
import TextAreaComponent from '../Formfields/TextArea/textarea';
import { useForm, Controller } from 'react-hook-form'; // Import Controller from react-hook-form

interface FormGeneratorProps {
  fields: FormField[];
  values: { [key: string]: any };
  onChange: (name: string, value: any) => void;
  control: any;  // control from useForm hook
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ fields, values, onChange, control }) => {
  return (
    <>
      {fields.map((field) => {
        switch (field.type) {
          case FieldType.TEXTFIELD:
            return <TextFieldComponent key={field.name} field={field} />;

            case FieldType.TEXTAREA:
              return (
                <TextAreaComponent
                  key={field.name}
                  field={field}
                  control={control}  
                />
              );

              case FieldType.CHECKBOX:
                return (
                  <CheckboxComponent
                    key={field.name}
                    field={field}
                    control={control}  
                  />
                );
              

            case FieldType.RADIO:
              return (
                <RadioComponent
                  key={field.name}
                  field={field}
                  control={control} 
                />
              );
            

            case FieldType.SELECT:
              return (
                <SelectComponent
                  key={field.name}
                  field={field}
                  control={control} 
                />
              );
            

              case FieldType.SWITCH:
                return (
                  <SwitchComponent
                    key={field.name}
                    field={field}
                    control={control} 
                  />
                );
              

                case FieldType.SLIDER:
                  return (
                    <SliderComponent
                      key={field.name}
                      field={field}
                      control={control} 
                    />
                  );
                

          default:
            return null;
        }
      })}
    </>
  );
};

export default FormGenerator;
