import React, { createContext, FC, useCallback, useContext, useInsertionEffect, useMemo, useState } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import type { ThemeConfig } from 'antd';
//import styles from './themeProvider.scss';
import { ThemeColors } from './primaryProviderThemes';

export enum Theme {
  dark = 'dark',
  light = 'light',
}

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const KEY = 'theme';

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(KEY) as Theme) || Theme.light);

  useInsertionEffect(() => {
    localStorage.setItem(KEY, theme);
    const html = document.body.parentElement;
    /*const style = theme === Theme.light ? styles.light : styles.dark; Можно добавить после конфигурирования storybook

    html.classList.add(style);

    return () => html.classList.remove(style);*/

    if (theme === Theme.light) {
      html.style.backgroundColor = ThemeColors.light.backgroundColor;
      html.style.color = ThemeColors.light.color;
    } else {
      html.style.backgroundColor = ThemeColors.dark.backgroundColor;
      html.style.color = ThemeColors.dark.color;
    }
  }, [theme]);

  const isThemeLight = theme === Theme.light;
  const toggleTheme = useCallback(() => setTheme((v) => (v === Theme.light ? Theme.dark : Theme.light)), []);
  const algorithm = isThemeLight ? antdTheme.defaultAlgorithm : antdTheme.darkAlgorithm;
  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);
  const config: ThemeConfig = {
    token: {
      colorPrimary: isThemeLight ? ThemeColors.light.primary : ThemeColors.dark.primary,
    },
    algorithm,
  };

  return (
    <ThemeContext.Provider value={value}>
      <ConfigProvider theme={config}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};
