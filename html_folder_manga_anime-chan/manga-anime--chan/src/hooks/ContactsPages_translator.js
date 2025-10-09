import { useState, useEffect } from "react";
import { translations } from "../translations/Contacts_languages";

export function UseContactsPageTranslator() {
  const [language, setLanguage] = useState("ru");
  const [t, setT] = useState(translations[language]);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      setT(translations[lang]);
      localStorage.setItem("siteLang", lang);
    }
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("siteLang") || "ru";
    setLanguage(savedLang);
    setT(translations[savedLang]);
  }, []);

  return { t, changeLanguage, language };
}

