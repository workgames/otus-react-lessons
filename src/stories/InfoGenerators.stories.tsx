import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InfoGenerators } from '../Components/InfoGenerators';

export default {
  title: 'UI/InfoGenerators',
  component: InfoGenerators,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InfoGenerators>;

const Template: ComponentStory<typeof InfoGenerators> = (args) => <InfoGenerators {...args} />;

export const Defult = Template.bind({});
Defult.args = {
  count: 190,
  label: 'Generators',
};
