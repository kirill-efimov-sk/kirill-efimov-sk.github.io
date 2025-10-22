import React from 'react';
import { ConfigProvider, App as AntdApp } from 'antd';
import { ThemeProvider } from 'src/app/theming';
import { LanguageProvider } from 'src/app/localization';
import { Navigation } from 'src/app/navigation';
import { Layout } from 'src/widgets/layout/Layout';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ConfigProvider>
          <AntdApp>
            <Navigation>
              <Layout />
            </Navigation>
          </AntdApp>
        </ConfigProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
