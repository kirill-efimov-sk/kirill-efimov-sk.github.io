import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SignInScreenForm, SignInFormProps } from './SignIn';

const meta: Meta<typeof SignInScreenForm> = {
  title: 'Feature/Forms/Auth/SignIn',
  component: SignInScreenForm,
  argTypes: {
    initialUserData: {
      username: 'string',
      password: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SignInForm: Story = {
  render: (args: SignInFormProps) => <SignInScreenForm {...args} />,
  args: {
    initialUserData: {
      username: '',
      password: '',
    },
  },
  tags: ['autodocs'],
};
