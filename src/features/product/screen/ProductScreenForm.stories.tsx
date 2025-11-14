import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { uid } from 'uid';
import { ProductScreenForm, ProductFormProps } from './ProductScreenForm';

const meta: Meta<typeof ProductScreenForm> = {
  title: 'Feature/Forms/ProductForm',
  component: ProductScreenForm,
  argTypes: {
    initialProduct: {
      id: 'string',
      category: 'string',
      description: 'string',
      name: 'string',
      price: 'number',
      image: {
        url: 'string',
        title: 'string',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultProductForm: Story = {
  render: (args: ProductFormProps) => <ProductScreenForm {...args} />,
  args: {
    initialProduct: {
      id: uid(18),
      name: 'Имя продукта',
      description: 'Описание продукта',
      category: 'Категория продукта',
      price: 100,
      image: {
        url: '',
        title: '',
      },
    },
  },
  tags: ['autodocs'],
};
