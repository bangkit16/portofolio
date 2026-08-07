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
      type: "Kuliah (D4 Sistem Informasi Bisnis)",
      period: "2021 - 2025",
      location: "Malang, Indonesia",
      image: "/img/polinema.png",
    },
    {
      school: "SMK Negeri 1 Boyolangu",
      type: "SMK (Rekayasa Perangkat Lunak)",
      period: "2018 - 2021",
      location: "Tulungagung, Indonesia",
      image: "/img/smkn1boyolangu.png",
    },
  ];

  return (
    <section id="education">
      <div className="container mx-auto mb-16 mt-16 pt-20">
        <div className="w-full px-4">
          <h4 className="text-lg text-center font-bold uppercase mb-3 text-green-500">
            Pendidikan
          </h4>
          <h2 className="text-center font-bold text-3xl mb-8 lg:text-4xl uppercase">
            Riwayat Pendidikan
          </h2>
          <p className="text-center lg:w-4/6 w-5/6 mx-auto font-medium text-base text-slate-500 mb-12 lg:text-lg">
            Latar belakang pendidikan yang membentuk fondasi keahlian saya di
            bidang teknologi informasi.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {educations.map((edu, index) => (
              <motion.div key={index} variants={fadeUp}>
                <EducationCard
                  school={edu.school}
                  type={edu.type}
                  period={edu.period}
                  location={edu.location}
                  image={edu.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;
