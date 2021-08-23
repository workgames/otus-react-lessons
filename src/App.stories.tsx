import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { App } from './App';

export default {
  title: 'Layout/App',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof App>;

export const Default: ComponentStory<typeof App> = () => <App />;
