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

export const TimerLastLoadUserDefault: ComponentStory<typeof TimerLastLoadUser> = () => (
  <TimerLastLoadUser />
);
