import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { OperationDetailCard, OperationDetailCardProps } from './OperationDetailCard';

const meta: Meta<typeof OperationDetailCard> = {
  title: 'Feature/Operation/OperationDetailCard',
  component: OperationDetailCard,
  argTypes: {
    price: { type: 'number' },
    category: { type: 'string' },
    name: { type: 'string' },
    description: { type: 'string' },
    date: {
      control: 'date', // Автоматический date-picker в интерфейсе Storybook
      description: 'Выберите дату',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FullOperationCardComponent: Story = {
  render: (args: OperationDetailCardProps) => <OperationDetailCard {...args} />,
  args: {
    name: 'Operation name',
    description: 'Operation description',
    category: 'Operation category',
    price: 0,
    date: new Date(),
  },
  tags: ['autodocs'],
};
