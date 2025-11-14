import React from 'react';
import { ConfigProvider, App as AntdApp } from 'antd';
import { ThemeProvider } from 'src/app/theming';
import { LanguageProvider } from 'src/app/localization';
import { Provider } from 'react-redux';
import { RouterProvider } from 'src/app/navigation';
import { Layout } from 'src/widgets/layout/Layout';
import { store } from 'src/app/store';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ConfigProvider>
          <Provider store={store}>
            <RouterProvider>
              <AntdApp>
                <Layout />
              </AntdApp>
            </RouterProvider>
          </Provider>
        </ConfigProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
