import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserInfo } from '@/Components/Users/UserInfo';

export default {
  title: 'Users/UserInfo',
  component: UserInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UserInfo>;

export const DefaultUserInfo: ComponentStory<typeof UserInfo> = (args) => <UserInfo {...args} />;

DefaultUserInfo.args = {
  userId: 1,
};
