import React, { FC } from 'react';
import { useThemeContext, Theme } from '../../app/theming';
import { Switch } from 'antd';

export const ThemeSwitcher: FC = (): React.JSX.Element => {
  const { theme, toggleTheme } = useThemeContext();
  const checked = theme ? theme === Theme.dark : undefined;

  return <Switch checked={checked} onChange={toggleTheme} checkedChildren="🌙" unCheckedChildren="☀️" />;
};
