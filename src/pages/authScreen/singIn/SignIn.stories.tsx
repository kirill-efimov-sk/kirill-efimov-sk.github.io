import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SignInScreenForm } from './SignIn';
import { AuthScreenFormProps } from '../types';

const meta: Meta<typeof SignInScreenForm> = {
  title: 'Feature/Forms/Auth/SignIn',
  component: SignInScreenForm,
  argTypes: {
    initialUserData: {
      email: 'string',
      password: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SignInForm: Story = {
  render: (args: AuthScreenFormProps) => <SignInScreenForm {...args} />,
  args: {
    initialUserData: {
      email: '',
      password: '',
    },
  },
  tags: ['autodocs'],
};
