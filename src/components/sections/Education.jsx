import EducationCard from "../ui/EducationCard";
import { motion } from "framer-motion";
import { fadeUp, container, viewport } from "../../lib/animations";
import { useLanguage } from "../../context/LanguageContext";

function Education() {
  const { t } = useLanguage();
  const educations = t.education.items;

  return (
    <section id="education" className="py-20 bg-slate-100/50 dark:bg-slate-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            {t.education.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.education.subtitle}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {educations.map((edu, index) => (
            <motion.div key={index} variants={fadeUp}>
              <EducationCard {...edu} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
