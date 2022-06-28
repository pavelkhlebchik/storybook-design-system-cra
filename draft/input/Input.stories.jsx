import React from 'react';

import { Input } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const DefaultNoStyle = Template.bind({});
export const NumberNoStyle = Template.bind({});
NumberNoStyle.args = {
  label: 'Default',
  type: 'number',
};
export const PasswordNoStyle = Template.bind({});
PasswordNoStyle.args = {
  type: 'password',
};
export const ValueNoStyle = Template.bind({});
ValueNoStyle.args = {
  value: 'value',
};

export const FullfilledNoStyle = Template.bind({});
