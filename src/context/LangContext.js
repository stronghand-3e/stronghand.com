import { createContext, useState } from "react";


export const LangContext = createContext();
export const LangProvider = ({children}) => {

  const [language, setLang] = useState(localStorage.getItem('lang') || 'en');
  function ChangeLang(value) {
    setLang(value);
    localStorage.setItem('lang', value);
  }

  return (
    <LangContext.Provider
      value={{
        language,
        ChangeLang
      }}
    >{children}</LangContext.Provider>
  )
}