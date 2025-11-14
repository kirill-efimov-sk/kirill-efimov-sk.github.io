import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ProductCard, ProductCardProps } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Feature/Product/ProductCard',
  component: ProductCard,
  argTypes: {
    product: {
      id: 'string',
      name: 'string',
      foto: 'string',
      desc: 'string',
      price: 'number',
      createdAt: 'string',
      category: {
        id: 'string',
        name: 'string',
        foto: 'string',
      },
    },
    cardId: { type: 'string' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCardComponent: Story = {
  render: (args: ProductCardProps) => <ProductCard {...args} />,
  args: {
    product: {
      id: '100sgdfdgfsdwt4yhgdvscasd',
      name: 'Product name',
      foto: 'https://sun9-78.userapi.com/impg/c856028/v856028314/1e0892/BfL4I39V-pU.jpg?size=484x704&quality=96&sign=1a77918b549f5f7f032b085182c198c4&type=album',
      desc: 'Product description (max 100 char)',
      price: 100,
      createdAt: '',
      category: {
        id: '',
        name: '',
        foto: '',
      },
    },
    cardId: '100asdgfhtjhgesfdcasde',
  },
  tags: ['autodocs'],
};
