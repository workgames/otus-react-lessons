import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TimerLastLoadUser } from '@/Components/Users/TimerLastLoadUser';

export default {
  title: 'Users/TimerLastLoadUser',
  component: TimerLastLoadUser,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TimerLastLoadUser>;

const Template: ComponentStory<typeof TimerLastLoadUser> = (args) => (
  <TimerLastLoadUser {...args} />
);

export const DefaultUserList = Template.bind({});
