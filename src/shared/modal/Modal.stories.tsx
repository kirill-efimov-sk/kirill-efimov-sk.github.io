import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalProps } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal',
  component: Modal,
  argTypes: {
    visible: { type: 'boolean' },
    children: { type: 'string' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalWindow: Story = {
  render: (args: ModalProps) => <Modal {...args}></Modal>,
  args: {
    visible: true,
    children: 'Enter your text..',
  },
  tags: ['autodocs'],
};
