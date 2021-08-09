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

const Template: ComponentStory<typeof UserList> = (args) => <UserList {...args} />;

export const DefaultUserList = Template.bind({});
