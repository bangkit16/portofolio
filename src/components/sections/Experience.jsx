import ExperienceCard from "../ui/ExperienceCard";
import { motion } from "framer-motion";
import { fadeUp, container, viewport } from "../../lib/animations";
import { useLanguage } from "../../context/LanguageContext";

function Experience() {
  const { t } = useLanguage();
  const experiences = t.experience.items;

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
            {t.experience.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
            {t.experience.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.experience.subtitle}
          </p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={fadeUp}>
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
