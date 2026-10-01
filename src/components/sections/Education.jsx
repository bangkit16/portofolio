import EducationCard from "../ui/EducationCard";
import { motion } from "framer-motion";
import { fadeUp, container, viewport } from "../../lib/animations";

function Education() {
  const educations = [
    {
      school: "Bootcamp Harisenin",
      type: "Bootcamp (Fullstack Web Developer)",
      period: "Mar 2026 - Aug 2026",
      location: "Online",
      image: "/img/harisenin.jpg",
    },
    {
      school: "Politeknik Negeri Malang",
      type: "D4 Sistem Informasi Bisnis",
      period: "2021 - 2025",
      location: "Malang, Indonesia",
      image: "/img/polinema.png",
    },
    {
      school: "SMK Negeri 1 Boyolangu",
      type: "Rekayasa Perangkat Lunak",
      period: "2018 - 2021",
      location: "Tulungagung, Indonesia",
      image: "/img/smkn1boyolangu.png",
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-100/50 dark:bg-slate-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Riwayat Pendidikan
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Fondasi akademik dan pelatihan intensif yang membentuk keterampilan rekayasa perangkat lunak saya.
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
