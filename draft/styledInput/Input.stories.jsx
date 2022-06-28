import React, { ComponentProps } from 'react';
import { Input } from './Input';

export default {
  title: 'atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const DefaultInputStylized = Template.bind({});
DefaultInputStylized.args = {
  label: 'Default input stylized',
  value: '',
  placeholder: 'Enter text',
  type: 'text',
};
export const InputWithErrorStylized = Template.bind({});
InputWithErrorStylized.args = {
  label: 'Input with error stylized',
  value: '',
  placeholder: 'Must be filled',
  type: 'text',
  errorText: 'Required field',
};
export const DisabledInputStylized = Template.bind({});
DisabledInputStylized.args = {
  label: 'Disabled empty input stylized',
  value: '',
  disabled: true,
  placeholder: 'Enter name',
  type: 'text',
};
export const DisabledFilledInputStylized = Template.bind({});
DisabledFilledInputStylized.args = {
  ...DisabledInputStylized.args,
  label: 'Disabled filled input stylized',
  value: 'Some text',
};
