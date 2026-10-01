/* eslint-disable react/prop-types */
function SkillItem({ name, level, icon, color }) {
  return (
    <div
      className="p-3 flex flex-col items-center justify-center group relative rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-700/50 transition-colors w-24 sm:w-28"
    >
      <div
        className="w-12 h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
        style={{ color }}
      >
        <div
          className="w-10 h-10 bg-current"
          style={{
            maskImage: `url(${icon})`,
            WebkitMaskImage: `url(${icon})`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          }}
        />
      </div>

      <h4 className="text-center mt-2 font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
        {name}
      </h4>
      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
        {level}
      </span>
    </div>
  )
}

export default SkillItem
