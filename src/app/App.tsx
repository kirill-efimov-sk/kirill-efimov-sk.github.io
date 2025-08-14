import React from 'react';
import './App.css';
import { ThemeProvider } from 'src/app/theming';
import { LanguageProvider } from 'src/app/localization';
import { Layout } from 'src/widgets/layout/Layout';
import { AboutMe } from 'src/features/about';
import { OperationList } from 'src/widgets/operationList';
import { InputModal } from 'src/shared/input-modal';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout />
        <AboutMe />
        <InputModal />
        <OperationList />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
