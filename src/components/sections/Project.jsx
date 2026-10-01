import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import { fadeUp } from '../../lib/animations'
import inventaris from '/img/inventaris.png'
import maut from '/img/maut.png'
import aluna from '/img/aluna.png'
import tesla from '/img/tesla.png'
import POS from '/img/POS.png'
import safeGuard from '/img/safeguard.png'
import sijeo from '/img/sijeo.png'
import sqla from '/img/sqla.png'
import videobelajar from '/img/videobelajar.png'

function Project() {
  const pro = [
    {
      nama: "Tesla Education Center",
      gambar: tesla,
      tool: "TypeScript, Next.js, Tailwind CSS",
      deskripsi:
        "Platform edukasi interaktif untuk belajar dan mempraktikkan konsep teknologi melalui materi terstruktur.",
      link: "https://tesla-education-center.vercel.app/",
    },
    {
      nama: "Aluna Pilates Studio",
      gambar: aluna,
      tool: "TypeScript, Next.js, Tailwind CSS",
      deskripsi:
        "Platform digital penyedia jadwal latihan pilates dan sistem reservasi kelas untuk gaya hidup sehat.",
      link: "https://aluna-pilates-studio.vercel.app/",
    },
    {
      nama: "Videobelajar: Platform Belajar Interaktif",
      gambar: videobelajar,
      tool: "Express.js, TypeScript, React, Tailwind CSS",
      deskripsi:
        "Platform kursus video online interaktif untuk mempelajari teknologi informasi dengan modul praktis.",
      link: "https://videobelajar.bangkit.site/",
    },
    {
      nama: "SQL Adventure: Journey to Mastery",
      gambar: sqla,
      tool: "Laravel 10, Bootstrap 5",
      deskripsi:
        "Platform interaktif berbasis storytelling untuk menguasai query SQL melalui tantangan gamifikasi.",
      link: "https://github.com/bangkit16/livesqla",
    },
    {
      nama: "SafeGuard HSSE System",
      gambar: safeGuard,
      tool: "Laravel 10, Bootstrap 5",
      deskripsi:
        "Digitalisasi kepatuhan keselamatan kerja (HSSE) untuk monitoring insiden dan inspeksi operasional.",
      link: "https://save-guard.com/",
    },
    {
      nama: "Point of Sales (POS) System",
      gambar: POS,
      tool: "Laravel 10, Bootstrap 5",
      deskripsi:
        "Dashboard kasir dan analytics penjualan real-time untuk manajemen inventaris ritel.",
      link: "https://github.com/bangkit16/PWL_2024",
    },
    {
      nama: "Inventaris Perkakas JTI",
      gambar: inventaris,
      tool: "Laravel 10, Bootstrap 5",
      deskripsi:
        "Aplikasi web pelacakan inventaris alat lab jurusan Teknologi Informasi Polinema.",
      link: "https://github.com/bangkit16/Inventaris",
    },
    {
      nama: "SIJEO: Event Organizer System",
      gambar: sijeo,
      tool: "CodeIgniter 4, Bootstrap 5",
      deskripsi:
        "Aplikasi pengelolaan vendor, reservasi acara, dan invoice pembayaran terintegrasi.",
      link: "https://github.com/bangkit16/sijeo-mp",
    },
    {
      nama: "SPK MAUT (Decision Support)",
      gambar: maut,
      tool: "CodeIgniter 4, Bootstrap 5",
      deskripsi:
        "Sistem pendukung keputusan menggunakan algoritma Multi-Attribute Utility Theory (MAUT).",
      link: "https://github.com/bangkit16/SPKMAUT",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3)

  return (
    <section id="projek" className="py-20 bg-slate-100/50 dark:bg-slate-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
            Proyek Unggulan
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Koleksi aplikasi web nyata yang telah saya kembangkan dari skala frontend interaktif hingga ERP enterprise.
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
            {visibleCount >= pro.length ? 'Tampilkan Lebih Sedikit' : 'Lihat Proyek Lainnya'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Project
