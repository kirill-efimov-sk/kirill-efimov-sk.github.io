import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Shared/Logo',
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoComponent: Story = {
  render: () => <Logo></Logo>,
  tags: ['autodocs'],
};
