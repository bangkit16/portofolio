/* eslint-disable react/prop-types */
function SkillItem({ name, level, icon, color }) {
  return (
    <div
      className={`p-4 flex flex-col items-center justify-center group relative transition-colors w-1/5 lg:w-1/3`}
      style={{ color: color }}
    >
      <div 
        className="w-14 h-14 lg:w-20 lg:h-20 bg-current group-hover:scale-110 transition-transform duration-300 group-hover:-translate-y-2"
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

      <h3
        className={`text-center mt-3 font-semibold text-slate-900 transition-transform duration-300 group-hover:-translate-y-4 text-sm lg:text-base`}
      >
        {name}
      </h3>
      <span className="absolute bottom-0 text-xs lg:text-sm text-slate-900 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 font-medium">
        {level}
      </span>
    </div>
  )
}

export default SkillItem
