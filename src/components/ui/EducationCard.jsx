/* eslint-disable react/prop-types */
function EducationCard({ school, type, period, location, image }) {
  return (
    <div className="w-full h-full">
      <div className="h-full bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors shadow-sm">
        <div className="w-20 h-20 mb-4 p-2 bg-slate-50 dark:bg-slate-700/50 rounded-xl flex items-center justify-center">
          <img
            src={image}
            alt={school}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
          {school}
        </h4>
        <span className="font-medium text-sm text-emerald-600 dark:text-emerald-400 mb-3">
          {type}
        </span>
        <div className="mt-auto flex flex-col gap-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span>{location}</span>
          <span className="font-semibold text-slate-600 dark:text-slate-300">{period}</span>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
