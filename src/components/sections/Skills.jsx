import SkillItem from '../ui/SkillItem'

function Skills() {
  const skillsData = {
    frontend: [
      {
        name: 'HTML',
        level: 'Advanced',
        icon: '/svg/skills/html.svg',
        color: '#EF4223',
      },
      {
        name: 'CSS',
        level: 'Advanced',
        icon: '/svg/skills/css.svg',
        color: '#EF4223',
      },
      {
        name: 'Javascript',
        level: 'Intermediate',
        icon: '/svg/skills/javascript.svg',
        color: '#F7DF1E',
      },
      {
        name: 'Bootstrap',
        level: 'Advanced',
        icon: '/svg/skills/bootstrap.svg',
        color: '#7952B3',
      },
      {
        name: 'Tailwind',
        level: 'Intermediate',
        icon: '/svg/skills/tailwind.svg',
        color: '#06B6D4',
      },
      {
        name: 'ReactJS',
        level: 'Intermediate',
        icon: '/svg/skills/react.svg',
        color: '#61DAFB',
      },
      {
        name: 'NextJS',
        level: 'Beginner',
        icon: '/svg/skills/nextjs.svg',
        color: '#001023',
      },
    ],
    backend: [
      {
        name: 'PHP',
        level: 'Advanced',
        icon: '/svg/skills/php.svg',
        color: '#777BB4',
      },
      {
        name: 'NodeJS',
        level: 'Beginner',
        icon: '/svg/skills/nodejs.svg',
        color: '#5FA04E',
      },
      {
        name: 'CodeIgniter',
        level: 'Intermediate',
        icon: '/svg/skills/codeigniter.svg',
        color: '#EF4223',
      },
      {
        name: 'Laravel',
        level: 'Intermediate',
        icon: '/svg/skills/laravel.svg',
        color: '#FF2D20',
      },
    ],
    database: [
      {
        name: 'MySQL',
        level: 'Advanced',
        icon: '/svg/skills/mysql.svg',
        color: '#4479A1',
      },
      {
        name: 'PostgreSQL',
        level: 'Beginner',
        icon: '/svg/skills/postgresql.svg',
        color: '#4169E1',
      },
      {
        name: 'MongoDB',
        level: 'Beginner',
        icon: '/svg/skills/mongodb.svg',
        color: '#47A248',
      },
    ],
  }

  return (
    <section id="skills">
      <div className="container px-4 mx-auto mb-20 mt-20 pt-20">
        <h4 className="text-lg text-center font-bold uppercase text-green-500 mb-3">
          skills
        </h4>
        <h2 className="text-center font-bold text-3xl lg:text-4xl mb-5">
          Keahlian
        </h2>
        <p className="text-center lg:w-4/6 w-5/6 mx-auto font-medium text-base text-slate-500 mb-12 lg:text-lg">
          Saya menguasai berbagai teknologi web untuk menciptakan aplikasi yang
          responsif dan fungsional.
        </p>

        <div className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-2">
          {/* Frontend */}
          <div className="w-full bg-white/50 rounded-2xl p-6 transition-shadow">
            <h3 className="text-xl lg:text-2xl font-bold text-center mb-8 text-green-500 border-b pb-4 border-slate-200">
              Frontend Development
            </h3>
            <div className="flex flex-wrap justify-center">
              {skillsData.frontend.map((skill, index) => (
                <SkillItem
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="w-full bg-white/50 rounded-2xl p-6 transition-shadow">
            <h3 className="text-xl lg:text-2xl font-bold text-center mb-8 text-green-500 border-b pb-4 border-slate-200">
              Backend Development
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skillsData.backend.map((skill, index) => (
                <SkillItem
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="w-full bg-white/50 rounded-2xl p-6 transition-shadow">
            <h3 className="text-xl lg:text-2xl font-bold text-center mb-8 text-green-500 border-b pb-4 border-slate-200">
              Database Management
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skillsData.database.map((skill, index) => (
                <SkillItem
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
