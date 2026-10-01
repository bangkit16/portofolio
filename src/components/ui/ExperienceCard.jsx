import { useState } from 'react'

/* eslint-disable react/prop-types */
function ExperienceCard({ company, role, date, description, responsibilities, type }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full mb-3">
      <div
        className={`w-full bg-white dark:bg-slate-800/80 rounded-xl p-5 sm:p-6 border transition-all duration-200 cursor-pointer ${
          isOpen
            ? 'border-emerald-500 shadow-sm'
            : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(!isOpen)
          }
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h4 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
              {company}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-medium text-emerald-600 dark:text-emerald-400 text-sm sm:text-base">
                {role}
              </span>
              <span className="text-slate-400 dark:text-slate-500 text-xs sm:text-sm">
                • {type}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 px-3 py-1 rounded-full">
              {date}
            </span>
            <div
              className={`text-slate-400 hover:text-emerald-500 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60">
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
              {description}
            </p>
            {responsibilities && responsibilities.length > 0 && (
              <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {responsibilities.map((item, index) => (
                  <li key={index} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceCard
