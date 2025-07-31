import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANG_STORAGE_KEY, Locale } from './settings';

type LanguageContextType = {
  language: Locale;
  setLanguage: (lang: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage used without Provider');
  return context;
};

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState<Locale>(
    () => (localStorage.getItem(LANG_STORAGE_KEY) as Locale) || Locale.en
  );

  // Синхронизация i18n и контекста
  useEffect(() => {
    const handleLanguageChange = (lang: string) => {
      setLanguage(lang as Locale);
      localStorage.setItem(LANG_STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  const value = {
    language,
    setLanguage: (lang: Locale) => i18n.changeLanguage(lang),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
