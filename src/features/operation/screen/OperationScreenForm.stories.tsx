import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { OperationScreenForm, OperationFormProps } from './OperationScreenForm';

const meta: Meta<typeof OperationScreenForm> = {
  title: 'Feature/Forms/OperationForm',
  component: OperationScreenForm,
  argTypes: {
    initialOperation: {
      category: 'string',
      date: 'string',
      description: 'string',
      name: 'string',
      price: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultOperationForm: Story = {
  render: (args: OperationFormProps) => <OperationScreenForm {...args} />,
  args: {
    initialOperation: {
      category: 'Категория операции',
      date: new Date().toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      description: 'Описание операции',
      name: 'Имя операции',
      price: 100,
    },
  },
  tags: ['autodocs'],
};
