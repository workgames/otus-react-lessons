import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GridCell } from '../Components/Grid/GridCell';

export default {
  title: 'UI/GridCell',
  component: GridCell,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof GridCell>;

const Template: ComponentStory<typeof GridCell> = (args) => <GridCell {...args} />;

export const GridCellDefult = Template.bind({});
GridCellDefult.args = {
  className: '',
  cellId: '1 + 1',
  row: 1,
  col: 1,
};

export const GridCellLive = Template.bind({});
GridCellLive.args = {
  className: 'on',
  cellId: '1 + 1',
  row: 1,
  col: 1,
};

export const GridCellDead = Template.bind({});
GridCellDead.args = {
  className: 'off',
  cellId: '1 + 1',
  row: 1,
  col: 1,
};
