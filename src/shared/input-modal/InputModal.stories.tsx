import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { InputModal } from './InputModal';

const meta: Meta<typeof InputModal> = {
  title: 'Shared/InputModal',
  component: InputModal,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalWindow: Story = {
  render: () => <InputModal></InputModal>,
  tags: ['autodocs'],
};
