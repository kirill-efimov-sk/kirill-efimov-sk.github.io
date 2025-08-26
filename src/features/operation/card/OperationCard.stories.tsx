import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { OperationCard, OperationCardProps } from './OperationCard';

const meta: Meta<typeof OperationCard> = {
  title: 'Feature/Operation/OperationCard',
  component: OperationCard,
  argTypes: {
    cardId: { type: 'string' },
    price: { type: 'number' },
    category: { type: 'string' },
    name: { type: 'string' },
    description: { type: 'string' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OperationCardComponent: Story = {
  render: (args: OperationCardProps) => <OperationCard {...args} />,
  args: {
    name: 'Operation name',
    description: 'Operation description (max 100 char)',
    category: 'Operation category',
    price: 0,
  },
  tags: ['autodocs'],
};
