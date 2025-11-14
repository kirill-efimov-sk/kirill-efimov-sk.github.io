import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { uid } from 'uid';
import { OperationCard, OperationCardProps } from './OperationCard';

const meta: Meta<typeof OperationCard> = {
  title: 'Feature/Operation/OperationCard',
  component: OperationCard,
  argTypes: {
    cardId: { type: 'string' },
    operation: {
      id: 'string',
      price: 'number',
      category: { type: 'string' },
      name: 'string',
      description: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OperationCardComponent: Story = {
  render: (args: OperationCardProps) => <OperationCard {...args} />,
  args: {
    cardId: uid(18),
    operation: {
      id: uid(18),
      price: 0,
      category: 'Operation category',
      name: 'Operation name',
      description: 'Operation description (max 100 char)',
    },
  },
  tags: ['autodocs'],
};
