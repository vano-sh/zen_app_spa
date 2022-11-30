import { useEffect, useState } from 'react'
import { LangContext } from '../contexts'

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(
    () => localStorage.getItem('lang') ?? 'en'
  )

  const toggleLang = (value) => {
    setLang(value)
  }

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const value = {
    lang,
    toggleLang,
  }

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  )
}
