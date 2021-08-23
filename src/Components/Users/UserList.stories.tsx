import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserList } from '@/Components/Users/UserList';

export default {
  title: 'Users/UserList',
  component: UserList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UserList>;

export const DefaultUserList: ComponentStory<typeof UserList> = () => <UserList />;
