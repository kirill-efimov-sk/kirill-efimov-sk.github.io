import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { uid } from 'uid';
import { OperationScreenForm, OperationFormProps } from './OperationScreenForm';

const meta: Meta<typeof OperationScreenForm> = {
  title: 'Feature/Forms/OperationForm',
  component: OperationScreenForm,
  argTypes: {
    initialOperation: {
      id: 'string',
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
      id: uid(18),
      category: 'Категория операции',
      date: new Date().toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      description: 'Описание операции',
      name: 'Имя операции',
      price: 100,
    },
  },
  tags: ['autodocs'],
};
