import React, { ComponentProps } from 'react';
// import { Story } from '@storybook/react/types-6-0';

import { Button123 } from './Button';
// import {OFDButton} from "@/no-typescript/stories/components/button/OFDButton";

export default {
  title: 'atoms/Button123',
  component: Button123,
};

const Template = (args) => <Button123 {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: 'Default button',
};

export const FilledButton = Template.bind({});
FilledButton.args = {
  children: 'Filled primary button',
  size: 'small',
  variant: 'filled',
  color: 'primary',
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  ...FilledButton.args,
  variant: 'outlined',
  children: 'Outlined info button',
  color: 'info',
};
export const LargeButton = Template.bind({});
LargeButton.args = {
  ...FilledButton.args,
  size: 'large',
  children: 'Large warning button',
  color: 'warning',
};
export const SwitcherButton = Template.bind({});
SwitcherButton.args = {
  size: 'small',
  variant: 'switch',
  color: 'info',
  children: 'Switcher',
};
export const FullwidthButton = Template.bind({});
FullwidthButton.args = {
  ...FilledButton.args,
  fullwidth: true,
  children: 'I have 100% width',
  color: 'danger',
};
export const LargeLoadingButton = Template.bind({});
LargeLoadingButton.args = {
  ...FilledButton.args,
  size: 'large',
  isLoading: true,
  children: 'Large button with loader',
  color: 'gosotchet',
};
