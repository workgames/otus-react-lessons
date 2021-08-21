import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { UserInfo } from '@/Components/Users/UserInfo';

export default {
  title: 'Users/UserInfo',
  component: UserInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UserInfo>;

export const DefaultUserInfo = () => <UserInfo userId={1} />;

DefaultUserInfo.args = {
  userId: 1,
};
