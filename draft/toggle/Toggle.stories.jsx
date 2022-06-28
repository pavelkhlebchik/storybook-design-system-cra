import React from 'react';

import { Toggle } from './Toggle';

export default {
  title: 'Atoms/Toggle',
  component: Toggle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Toggle {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  checked: false,
};
