import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SignUpScreenForm, SignUpFormProps } from './SignUp';

const meta: Meta<typeof SignUpScreenForm> = {
  title: 'Feature/Forms/Auth/SignUp',
  component: SignUpScreenForm,
  argTypes: {
    initialUserData: {
      username: 'string',
      password: 'string',
      repeatPassword: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUpForm: Story = {
  render: (args: SignUpFormProps) => <SignUpScreenForm {...args} />,
  args: {
    initialUserData: {
      username: '',
      password: '',
      repeatPassword: '',
    },
  },
  tags: ['autodocs'],
};
