import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Layout, LayoutProps } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Widgets/Layout/Layout',
  component: Layout,
  argTypes: {
    children: { type: 'string' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutComponent: Story = {
  render: (args: LayoutProps) => <Layout {...args} />,
  args: {
    children: '',
  },
  tags: ['autodocs'],
};
