import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ProductDetailCard, ProductDetailCardProps } from './ProductDetailCard';

const meta: Meta<typeof ProductDetailCard> = {
  title: 'Feature/Product/ProductDetailCard',
  component: ProductDetailCard,
  argTypes: {
    cardId: { type: 'string' },
    price: { type: 'number' },
    image: {
      url: { type: 'string' },
      title: { type: 'string' },
    },
    name: { type: 'string' },
    category: { type: 'string' },
    description: { type: 'string' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductDetailCardComponent: Story = {
  render: (args: ProductDetailCardProps) => <ProductDetailCard {...args} />,
  args: {
    name: 'Product name',
    description: 'Product description',
    category: 'Product category',
    image: {
      url: 'https://sun9-78.userapi.com/impg/c856028/v856028314/1e0892/BfL4I39V-pU.jpg?size=484x704&quality=96&sign=1a77918b549f5f7f032b085182c198c4&type=album',
      title: 'Product',
    },
    price: 0,
  },
  tags: ['autodocs'],
};
