import { RegisterOptions } from 'react-hook-form';

export enum FieldType {
  TEXTFIELD = 'textfield',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  SELECT = 'select',
  SWITCH = 'switch',
  SLIDER = 'slider',
  TEXTAREA = 'textarea',
}

export interface BaseField {
  name: string;
  label: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  helperText?: string;
  validation?: RegisterOptions;  // Add validation rule here
}

export interface TextField extends BaseField {
  type: FieldType.TEXTFIELD;
  placeholder?: string;
  validation?: RegisterOptions;  // Allow additional validation on text field
}

export interface TextAreaField extends BaseField {
  type: FieldType.TEXTAREA;
  placeholder?: string;
  rows?: number;
}

export interface CheckboxField extends BaseField {
  type: FieldType.CHECKBOX;
}

export interface RadioField extends BaseField {
  type: FieldType.RADIO;
  options: { label: string; value: string }[];
}

export interface SelectField extends BaseField {
  type: FieldType.SELECT;
  options: { label: string; value: string }[];
}

export interface SwitchField extends BaseField {
  onChange: (name: string, value: boolean) => void;
  type: FieldType.SWITCH;
}

export interface SliderField extends BaseField {
  type: FieldType.SLIDER;
  min: number;
  max: number;
  step?: number;
}

export type FormField =
  | TextField
  | TextAreaField
  | CheckboxField
  | RadioField
  | SelectField
  | SwitchField
  | SliderField;
