import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { uid } from 'uid';
import { OperationDetailCard, OperationDetailCardProps } from './OperationDetailCard';

const meta: Meta<typeof OperationDetailCard> = {
  title: 'Feature/Operation/OperationDetailCard',
  component: OperationDetailCard,
  argTypes: {
    cardId: { type: 'string' },
    operation: {
      id: 'string',
      price: 'number',
      category: { type: 'string' },
      name: 'string',
      description: 'string',
      date: {
        control: 'date', // Автоматический date-picker в интерфейсе Storybook
        description: 'Выберите дату',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FullOperationCardComponent: Story = {
  render: (args: OperationDetailCardProps) => <OperationDetailCard {...args} />,
  args: {
    cardId: uid(18),
    operation: {
      id: uid(18),
      name: 'Operation name',
      description: 'Operation description',
      category: 'Operation category',
      price: 0,
      date: new Date().toLocaleDateString(),
    },
  },
  tags: ['autodocs'],
};
