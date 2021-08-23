import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TitleBlockText } from './index';

export default {
  title: 'UI/TitleHeader',
  component: TitleBlockText,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TitleBlockText>;

const Template: ComponentStory<typeof TitleBlockText> = (args) => <TitleBlockText {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Заголовок',
};

export const Size40 = Template.bind({});
Size40.args = {
  label: 'Заголовок',
  size: 40,
};
