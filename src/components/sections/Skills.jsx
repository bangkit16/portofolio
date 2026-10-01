import SkillItem from '../ui/SkillItem'
import { motion } from 'framer-motion'
import { fadeUp, container, viewport } from '../../lib/animations'

function Skills() {
  const skillsData = {
    frontend: [
      { name: 'HTML', level: 'Advanced', icon: '/svg/skills/html.svg', color: '#EF4223' },
      { name: 'CSS', level: 'Advanced', icon: '/svg/skills/css.svg', color: '#1572B6' },
      { name: 'Javascript', level: 'Intermediate', icon: '/svg/skills/javascript.svg', color: '#F7DF1E' },
      { name: 'Bootstrap', level: 'Advanced', icon: '/svg/skills/bootstrap.svg', color: '#7952B3' },
      { name: 'Tailwind', level: 'Intermediate', icon: '/svg/skills/tailwind.svg', color: '#06B6D4' },
      { name: 'ReactJS', level: 'Intermediate', icon: '/svg/skills/react.svg', color: '#61DAFB' },
      { name: 'NextJS', level: 'Intermediate', icon: '/svg/skills/nextjs.svg', color: '#888888' },
    ],
    backend: [
      { name: 'PHP', level: 'Advanced', icon: '/svg/skills/php.svg', color: '#777BB4' },
      { name: 'NodeJS', level: 'Intermediate', icon: '/svg/skills/nodejs.svg', color: '#5FA04E' },
      { name: 'CodeIgniter', level: 'Intermediate', icon: '/svg/skills/codeigniter.svg', color: '#EF4223' },
      { name: 'Laravel', level: 'Intermediate', icon: '/svg/skills/laravel.svg', color: '#FF2D20' },
    ],
    database: [
      { name: 'MySQL', level: 'Advanced', icon: '/svg/skills/mysql.svg', color: '#4479A1' },
      { name: 'PostgreSQL', level: 'Intermediate', icon: '/svg/skills/postgresql.svg', color: '#4169E1' },
      { name: 'MongoDB', level: 'Beginner', icon: '/svg/skills/mongodb.svg', color: '#47A248' },
    ],
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Keahlian Teknis
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Kombinasi teknologi yang biasa saya gunakan untuk membangun aplikasi web performan dan handal.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Frontend */}
          <motion.div
            variants={fadeUp}
            className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <h3 className="text-lg font-bold text-center mb-6 pb-3 border-b border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white">
              Frontend Development
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skillsData.frontend.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={fadeUp}
            className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <h3 className="text-lg font-bold text-center mb-6 pb-3 border-b border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white">
              Backend Development
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skillsData.backend.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Database */}
          <motion.div
            variants={fadeUp}
            className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <h3 className="text-lg font-bold text-center mb-6 pb-3 border-b border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white">
              Database & Storage
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skillsData.database.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
