import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Effector } from '../../shared/effector/Effector';
import { Wrapper } from './EffectorCase';

const meta: Meta<typeof Effector> = {
  title: 'Widgets/Effector',
  component: Wrapper,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Wrapper />,
};
