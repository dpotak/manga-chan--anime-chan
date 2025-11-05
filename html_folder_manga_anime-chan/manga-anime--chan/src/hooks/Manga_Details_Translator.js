import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { translations } from "../translations/Manga_Details_language";

export const Translator_Manga_Details = () => {
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
}; 
