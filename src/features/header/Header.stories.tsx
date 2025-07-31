import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Feature/Header',
  component: Header,
  argTypes: {
    children: { type: 'string' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderComponent: Story = {
  render: (args: HeaderProps) => <Header {...args} />,
  args: {
    children: '',
  },
  tags: ['autodocs'],
};
