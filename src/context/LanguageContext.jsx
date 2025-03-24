import { createContext, useState, useContext } from "react";

// Create Language Context
const LanguageContext = createContext();

// Supported Languages
const languages = {
  en: { welcome: "Welcome", about: "About Us", download: "Download PDF" },
  hi: { welcome: "स्वागत है", about: "हमारे बारे में", download: "पीडीएफ डाउनलोड करें" },
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  // Switch Language
  const switchLang = (language) => setLang(language);

  return (
    <LanguageContext.Provider value={{ lang, switchLang, t: languages[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook
export const useLanguage = () => useContext(LanguageContext);
