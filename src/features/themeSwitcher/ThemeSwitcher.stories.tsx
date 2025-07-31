import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeProvider } from '../../app/theming';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Feature/ThemeSwitcher',
  component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeSwitcherComponent: Story = {
  render: () => (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  ),
  tags: ['autodocs'],
};
