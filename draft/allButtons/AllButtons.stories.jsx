import React from 'react';

import { AllButtons } from './AllButtons.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/AllButtons',
  component: AllButtons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <AllButtons {...args} />;

export const Borderless = Template.bind({});

export const Switch = Template.bind({});

export const Default = Template.bind({});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  variant: 'filled',
  label: 'AllButtons',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'AllButtons',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'AllButtons',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  variant: 'filled',
  label: 'AllButtons',
};

export const Hover = Template.bind({});
Hover.args = {
  pseudoClass: 'hover',
  label: 'AllButtons',
};
Hover.parameters = { pseudo: { hover: true } };

export const Focus = Template.bind({});
Focus.args = {
  pseudoClass: 'focus',
  label: 'AllButtons',
};

export const Active = Template.bind({});
Active.args = {
  pseudoClass: 'active',
  label: 'AllButtons',
};

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: 'Default button',
  label: 'AllButtons',
};

export const FilledButton = Template.bind({});
FilledButton.args = {
  children: 'Filled primary button',
  size: 'small',
  variant: 'filled',
  color: 'primary',
  label: 'AllButtons',
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  ...FilledButton.args,
  variant: 'outlined',
  children: 'Outlined info button',
  color: 'info',
  label: 'AllButtons',
};
export const LargeButton = Template.bind({});
LargeButton.args = {
  ...FilledButton.args,
  size: 'large',
  children: 'Large warning button',
  color: 'warning',
  label: 'AllButtons',
};
export const SwitcherButton = Template.bind({});
SwitcherButton.args = {
  size: 'small',
  variant: 'switch',
  color: 'info',
  children: 'Switcher',
  label: 'AllButtons',
};
export const FullwidthButton = Template.bind({});
FullwidthButton.args = {
  ...FilledButton.args,
  fullwidth: true,
  children: 'I have 100% width',
  color: 'danger',
  label: 'AllButtons',
};
export const LargeLoadingButton = Template.bind({});
LargeLoadingButton.args = {
  ...FilledButton.args,
  size: 'large',
  isLoading: true,
  children: 'Large button with loader',
  color: 'gosotchet',
  label: 'AllButtons',
};
