import { EXAMPLE_OPTIONS } from './utilities/example-data';
import React from 'react';
import VirtualizedSelect from '../VirtualizedSelect.jsx';
import { logOnChange } from './utilities/on-change';
import propsMarkdown from './utilities/props.md';
import { storiesOf } from '@storybook/react';

storiesOf('molecules/Virtualized Select', module).add(
  'Disabled',
  () => (
    <VirtualizedSelect
      isDisabled={true}
      onChange={logOnChange}
      options={EXAMPLE_OPTIONS}
    />
  ),
  {
    notes: { markdown: propsMarkdown },
  },
);
