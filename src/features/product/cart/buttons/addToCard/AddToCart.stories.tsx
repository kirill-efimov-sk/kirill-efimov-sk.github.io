import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AddToCart, AddToCartProps } from './AddToCart';

const meta: Meta<typeof AddToCart> = {
  title: 'Feature/Product/Cart/Add',
  component: AddToCart,
  argTypes: {
    count: { type: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCardComponent: Story = {
  render: (args: AddToCartProps) => <AddToCart {...args} />,
  args: {
    count: 0,
  },
  tags: ['autodocs'],
};
