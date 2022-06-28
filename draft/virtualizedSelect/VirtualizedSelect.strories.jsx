import React from 'react';

import { VirtualizedSelect } from './VirtualizedSelect.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/VirtualizedSelect',
  component: VirtualizedSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <VirtualizedSelect {...args} />;
