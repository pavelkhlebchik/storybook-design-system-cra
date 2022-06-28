import Chance from 'chance';

const chance = new Chance();

export const EXAMPLE_OPTIONS = [
  {
    label: 'Item 1',
    value: 1,
  },
  {
    label: 'Item 2',
    value: 2,
  },
  {
    label: 'Item 3',
    value: 3,
  },
  {
    label: 'Item 4',
    value: 4,
  },
  {
    label: 'Item 5',
    value: 5,
  },
  {
    label: 'Item 6',
    value: 6,
  },
  {
    label: 'Item 7',
    value: 7,
  },
  {
    label: 'Item 8',
    value: 8,
  },
  {
    label: 'Item 8',
    value: 8,
  },
  {
    label: 'Item 9',
    value: 9,
  },
  {
    label: 'Item 10',
    value: 10,
  },
];

export const EXAMPLE_OPTIONS_WITH_SUBTITLE = [
  {
    label: 'Item 1',
    subtitle: 'Subtitle 1',
    value: 1,
  },
  {
    label: 'Item 2',
    subtitle: 'Subtitle 2',
    value: 2,
  },
  {
    label: 'Item 3',
    subtitle: 'Subtitle 3',
    value: 3,
  },
];

export const EXAMPLE_OPTIONS_LARGE_LIST = chance.n(
  (index) => ({
    label: chance.name(),
    subtitle: chance.street(),
    value: index,
  }),
  10000,
);
