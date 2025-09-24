import React from 'react';
import { ConfigProvider, App as AntdApp } from 'antd';
import { ThemeProvider } from 'src/app/theming';
import { LanguageProvider } from 'src/app/localization';
import { Layout } from 'src/widgets/layout/Layout';
import { AboutMe } from 'src/features/about';
import { OperationList } from 'src/widgets/operationList';
import { InputModal } from 'src/shared/input-modal';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ConfigProvider>
          <AntdApp>
            <Layout />
            <AboutMe />
            <InputModal />
            <OperationList />
          </AntdApp>
        </ConfigProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
