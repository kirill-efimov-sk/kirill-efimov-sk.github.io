import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LanguageSwitcher } from './LangSwitcher';
import { LanguageProvider } from '../../app/localization';
import '../../app/theming/themeProvider.scss';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Feature/LangSwitcher',
  component: LanguageSwitcher,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LangSwitcherComponent: Story = {
  render: () => (
    <LanguageProvider>
      <LanguageSwitcher />
    </LanguageProvider>
  ),
  tags: ['autodocs'],
};
