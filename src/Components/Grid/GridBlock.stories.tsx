import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GridBlock } from './GridBlock';
import { getDataGrid, seedGameArea } from '@/helpers/gameDataPreparation';

export default {
  title: 'UI/GridBlock',
  component: GridBlock,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof GridBlock>;

const Template: ComponentStory<typeof GridBlock> = (args) => <GridBlock {...args} />;

export const Grid10X10 = Template.bind({});
Grid10X10.args = {
  rows: 10,
  cols: 10,
};

export const Grid30X50 = Template.bind({});
Grid30X50.args = {
  rows: 30,
  cols: 50,
};

export const Grid30X50Seed = Template.bind({});
const gridData = seedGameArea(30, 50, getDataGrid(30, 50));
Grid30X50Seed.args = {
  rows: 30,
  cols: 50,
  gridData,
};
