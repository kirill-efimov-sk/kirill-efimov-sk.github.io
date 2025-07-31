import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Layout, LayoutProps } from './Layout';
import { ThemeProvider } from '../../app/theming/ThemeProvider';
import { LanguageProvider } from '../../app/localization';

const meta: Meta<typeof Layout> = {
  title: 'Widgets/Layout',
  component: Layout,
  argTypes: {
    children: { type: 'string' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutComponent: Story = {
  render: (args: LayoutProps) => (
    <ThemeProvider>
      <LanguageProvider>
        <Layout {...args} />
      </LanguageProvider>
    </ThemeProvider>
  ),
  args: {
    children: '',
  },
  tags: ['autodocs'],
};
