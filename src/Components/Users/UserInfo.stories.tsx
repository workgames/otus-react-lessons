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

const Template: ComponentStory<typeof UserInfo> = (args) => <UserInfo {...args} />;

export const DefaultUserInfo = Template.bind({});
DefaultUserInfo.args = {
  userId: 1,
};
