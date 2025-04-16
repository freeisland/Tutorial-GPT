import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('de');

  const translations = {
    de: {
      taskTitle: 'Aufgaben',
      totalProgress: 'Gesamtfortschritt',
      exportButton: 'Fortschritt exportieren',
      minimizeButton: 'Minimieren',
      maximizeButton: 'Maximieren',
      // Weitere Übersetzungen...
    },
    en: {
      taskTitle: 'Tasks',
      totalProgress: 'Total Progress',
      exportButton: 'Export Progress',
      minimizeButton: 'Minimize',
      maximizeButton: 'Maximize',
      // Weitere Übersetzungen...
    },
    // Weitere Sprachen...
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 