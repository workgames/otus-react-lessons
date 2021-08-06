import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GridCell } from './GridCell';

export default {
  title: 'UI/GridCell',
  component: GridCell,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof GridCell>;

const Template: ComponentStory<typeof GridCell> = (args) => <GridCell {...args} />;

export const GridCellDefault = Template.bind({});
GridCellDefault.args = {
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
