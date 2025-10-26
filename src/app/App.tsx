import React from 'react';
import { ConfigProvider, App as AntdApp } from 'antd';
import { ThemeProvider } from 'src/app/theming';
import { LanguageProvider } from 'src/app/localization';
import { RouterProvider } from 'src/app/navigation';
import { Layout } from 'src/widgets/layout/Layout';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ConfigProvider>
          <RouterProvider>
            <AntdApp>
              <Layout />
            </AntdApp>
          </RouterProvider>
        </ConfigProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
