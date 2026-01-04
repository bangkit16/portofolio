import { useState } from 'react'

/* eslint-disable react/prop-types */
function ExperienceCard({ company, role, date, description, responsibilities, type }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full relative transition-transform mb-6">
      <div 
        className={`border-slate-200 w-full relative bg-transparent rounded-xl p-6 flex flex-col border hover:border-green-500 transition-colors cursor-pointer ${isOpen ? 'border-green-500' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2">
          <div>
            <h4 className="font-bold text-xl text-slate-900">{company}</h4>
            <span className="font-semibold text-base text-green-500">
              {role} <span className="text-slate-400 text-sm font-normal">| {type}</span>
            </span>
          </div>
          <div className="flex items-center mt-2 lg:mt-0 gap-3">
            <span className="text-slate-500 font-medium text-sm lg:text-base bg-slate-100 px-3 py-1 rounded-full">
              {date}
            </span>
            <button className="text-slate-400 hover:text-green-500 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <p className="text-base text-slate-600 mb-4 leading-relaxed">
            {description}
          </p>

          {responsibilities && responsibilities.length > 0 && (
            <ul className="list-disc list-outside ml-5 space-y-1 text-slate-600">
              {responsibilities.map((item, index) => (
                <li key={index} className="text-sm lg:text-base">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
