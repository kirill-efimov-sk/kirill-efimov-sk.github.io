import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SignUpScreenForm } from './SignUp';
import { AuthScreenFormProps } from '../types';

const meta: Meta<typeof SignUpScreenForm> = {
  title: 'Feature/Forms/Auth/SignUp',
  component: SignUpScreenForm,
  argTypes: {
    initialUserData: {
      email: 'string',
      password: 'string',
      repeatPassword: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUpForm: Story = {
  render: (args: AuthScreenFormProps) => <SignUpScreenForm {...args} />,
  args: {
    initialUserData: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  },
  tags: ['autodocs'],
};
