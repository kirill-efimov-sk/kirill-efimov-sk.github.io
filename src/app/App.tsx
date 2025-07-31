import React from 'react';
import './App.css';
import { ThemeProvider } from 'src/app/theming';
import { LanguageProvider } from 'src/app/localization';
import { Layout } from 'src/widgets/layout/Layout';
import { AboutMe } from 'src/features/about';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout />
        <AboutMe />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
