import { useLanguage } from '../../context/LanguageContext'

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={`Switch to ${lang === 'id' ? 'English' : 'Bahasa Indonesia'}`}
      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
      title={lang === 'id' ? 'Ganti ke Bahasa Inggris (?lang=en)' : 'Switch to Indonesian (?lang=id)'}
    >
      <span className={lang === 'id' ? 'text-emerald-500 dark:text-emerald-400 font-bold' : 'text-slate-400 dark:text-slate-500'}>
        ID
      </span>
      <span className="text-slate-300 dark:text-slate-600">/</span>
      <span className={lang === 'en' ? 'text-emerald-500 dark:text-emerald-400 font-bold' : 'text-slate-400 dark:text-slate-500'}>
        EN
      </span>
    </button>
  )
}
