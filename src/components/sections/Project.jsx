import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import { fadeUp } from '../../lib/animations'
import { useLanguage } from '../../context/LanguageContext'

function Project() {
  const { t } = useLanguage()
  const pro = t.project.items
  const [visibleCount, setVisibleCount] = useState(3)

  return (
    <section id="projek" className="py-20 bg-slate-100/50 dark:bg-slate-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
            {t.project.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
            {t.project.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.project.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {pro.slice(0, visibleCount).map((item) => (
              <motion.div
                key={item.nama}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                layout
                className="h-full"
              >
                <ProjectCard
                  nama={item.nama}
                  gambar={item.gambar}
                  tool={item.tool}
                  deskripsi={item.deskripsi}
                  link={item.link}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-12">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => (prev >= pro.length ? 3 : prev + 3))}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {visibleCount >= pro.length ? t.project.viewLess : t.project.viewMore}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Project
