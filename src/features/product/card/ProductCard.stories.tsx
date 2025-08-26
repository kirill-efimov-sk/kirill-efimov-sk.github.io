import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ProductCard, ProductCardProps } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Feature/Product/ProductCard',
  component: ProductCard,
  argTypes: {
    cardId: { type: 'string' },
    price: { type: 'number' },
    image: {
      url: { type: 'string' },
      title: { type: 'string' },
    },
    name: { type: 'string' },
    description: { type: 'string' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCardComponent: Story = {
  render: (args: ProductCardProps) => <ProductCard {...args} />,
  args: {
    name: 'Product name',
    description: 'Product description (max 100 char)',
    image: {
      url: 'https://sun9-78.userapi.com/impg/c856028/v856028314/1e0892/BfL4I39V-pU.jpg?size=484x704&quality=96&sign=1a77918b549f5f7f032b085182c198c4&type=album',
      title: 'Product',
    },
    price: 0,
  },
  tags: ['autodocs'],
};
