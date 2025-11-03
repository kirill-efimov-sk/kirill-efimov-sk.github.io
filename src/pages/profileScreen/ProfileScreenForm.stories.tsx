import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ProfileScreenForm } from './ProfileScreenForm';

const meta: Meta<typeof ProfileScreenForm> = {
  title: 'Feature/Forms/ProfileForm',
  component: ProfileScreenForm,
  argTypes: {
    initialProfile: {
      name: 'string',
      about: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultProfileForm: Story = {
  render: () => <ProfileScreenForm />,
  tags: ['autodocs'],
};
