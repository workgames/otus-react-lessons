import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GridBlock } from './GridBlock';

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
