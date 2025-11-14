import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ProductDetailCard, ProductDetailCardProps } from './ProductDetailCard';

const meta: Meta<typeof ProductDetailCard> = {
  title: 'Feature/Product/ProductDetailCard',
  component: ProductDetailCard,
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

export const ProductDetailCardComponent: Story = {
  render: (args: ProductDetailCardProps) => <ProductDetailCard {...args} />,
  args: {
    product: {
      id: '200sgdfdgfsdwt4yhgdvscasd',
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
    cardId: '200asdgfhtjhgesfdcasde',
  },
  tags: ['autodocs'],
};
