import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ProductItem, ProductItemProps } from './ProductItem';

const meta: Meta<typeof ProductItem> = {
  title: 'Feature/Cart/Item',
  component: ProductItem,
  argTypes: {
    name: { type: 'string' },
    price: { type: 'number' },
    image: {
      url: { type: 'string' },
      title: { type: 'string' },
    },
    quantity: { type: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCardComponent: Story = {
  render: (args: ProductItemProps) => <ProductItem {...args} />,
  args: {
    name: 'Product name',
    price: 0,
    image: {
      url: 'https://sun9-78.userapi.com/impg/c856028/v856028314/1e0892/BfL4I39V-pU.jpg?size=484x704&quality=96&sign=1a77918b549f5f7f032b085182c198c4&type=album',
      title: 'Product',
    },
    quantity: 0,
  },
  tags: ['autodocs'],
};
