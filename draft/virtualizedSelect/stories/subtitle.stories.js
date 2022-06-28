import { EXAMPLE_OPTIONS_WITH_SUBTITLE } from './utilities/example-data';
import React from 'react';
import VirtualizedSelect from '../VirtualizedSelect.jsx';
import { logOnChange } from './utilities/on-change';
import propsMarkdown from './utilities/props.md';
import { storiesOf } from '@storybook/react';

storiesOf('molecules/Virtualized Select', module).add(
  'Subtitle',
  () => (
    <VirtualizedSelect
      onChange={logOnChange}
      options={EXAMPLE_OPTIONS_WITH_SUBTITLE}
    />
  ),
  {
    notes: { markdown: propsMarkdown },
  },
);
