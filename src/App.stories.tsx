import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { App } from './App';

export default {
  title: 'Lauout/App',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Defult = Template.bind({});
