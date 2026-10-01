/* eslint-disable react/prop-types */
function ProjectCard({ nama, gambar, tool, deskripsi, link }) {
  const toolsArray = tool ? tool.split(',').map((t) => t.trim()) : []

  return (
    <div className="w-full h-full p-2">
      <div className="h-full bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 shadow-sm hover:shadow">
        {/* Thumbnail */}
        <div className="w-full h-48 sm:h-52 overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
          <img
            src={gambar}
            alt={`Pratinjau proyek ${nama}`}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h4 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2 line-clamp-1">
            {nama}
          </h4>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {toolsArray.map((t, idx) => (
              <span
                key={idx}
                className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 line-clamp-3 leading-relaxed">
            {deskripsi}
          </p>

          <div className="mt-auto pt-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
              aria-label={`Kunjungi proyek ${nama}`}
            >
              <span>Lihat Proyek</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
