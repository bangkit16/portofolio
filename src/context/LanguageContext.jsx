import { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext()

function getInitialLang() {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    const queryLang = params.get('lang')?.toLowerCase()
    if (queryLang === 'id' || queryLang === 'en') {
      try {
        localStorage.setItem('lang', queryLang)
      } catch {
        // ignore storage error
      }
      return queryLang
    }

    try {
      const saved = localStorage.getItem('lang')
      if (saved === 'id' || saved === 'en') return saved
    } catch {
      // ignore storage error
    }
  }
  return 'id'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  const setLang = (newLang) => {
    if (newLang !== 'id' && newLang !== 'en') return
    setLangState(newLang)

    try {
      localStorage.setItem('lang', newLang)
    } catch {
      // ignore storage error
    }

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      url.searchParams.set('lang', newLang)
      window.history.replaceState({}, '', url.toString())
      document.documentElement.lang = newLang
    }
  }

  const toggleLang = () => {
    setLang(lang === 'id' ? 'en' : 'id')
  }

  useEffect(() => {
    document.documentElement.lang = lang

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      const queryLang = params.get('lang')?.toLowerCase()
      if (queryLang === 'id' || queryLang === 'en') {
        setLangState(queryLang)
        try {
          localStorage.setItem('lang', queryLang)
        } catch {
          // ignore storage error
        }
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [lang])

  const t = useMemo(() => translations[lang] || translations.id, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
