import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import { fadeUp } from '../../lib/animations'
import inventaris from '/img/inventaris.png'
import maut from '/img/maut.png'
import aluna from '/img/aluna.png'
import tesla from '/img/tesla.png'
// import portofolio from '/img/portofolio.png'
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
      tool: "TypeScript , NextJs , Tailwind",
      deskripsi:
        "Tesla Education Center adalah platform edukasi interaktif yang dirancang untuk membantu pengguna belajar, memahami, dan mempraktikkan berbagai konsep ilmu pengetahuan serta teknologi melalui materi pembelajaran yang terstruktur dan mendalam.",
      link: "https://tesla-education-center.vercel.app/",
    },
    {
      nama: "Aluna Pilates Studio",
      gambar: aluna,
      tool: "TypeScript , NextJs , Tailwind",
      deskripsi:
        "Aluna Pilates Studio adalah platform digital yang menyediakan panduan, jadwal, dan informasi komprehensif mengenai latihan pilates untuk mendukung gaya hidup sehat, kebugaran fisik, dan keseimbangan tubuh pengguna.",
      link: "https://aluna-pilates-studio.vercel.app/",
    },
    {
      nama: "Videobelajar : Platform Pembelajaran Video Interaktif",
      gambar: videobelajar,
      tool: "Express.js, TypeScript , ReactJs , Tailwind",
      deskripsi:
        "Videobelajar adalah platform pembelajaran video interaktif yang memungkinkan pengguna belajar dan mempraktikkan konsep-konsep teknologi informasi melalui video tutorial yang menarik dan informatif.",
      link: "https://videobelajar.bangkit.site/",
    },
    {
      nama: "SQL Adventure : Journey to Database Mastery",
      gambar: sqla,
      tool: "Laravel 10 , Bootstrap 5",
      deskripsi:
        "SQL Adventure adalah platform pembelajaran SQL interaktif berbasis storytelling yang memungkinkan pengguna belajar dan mempraktikkan query SQL melalui tantangan dan latihan langsung. ",
      link: "https://github.com/bangkit16/livesqla",
    },
    {
      nama: "SafeGuard",
      gambar: safeGuard,
      tool: "Laravel 10 , Bootstrap 5",
      deskripsi:
        "Digitalisasi HSSE untuk Keselamatan yang Lebih Cerdas dan Efisien",
      link: "https://save-guard.com/",
    },
    {
      nama: "Sistem Informasi Point Of Sales",
      gambar: POS,
      tool: "Laravel 10 , Bootstrap 5",
      deskripsi:
        "Sistem Informasi Point of Sales (POS) ini menyediakan dashboard intuitif dan grafik informatif untuk memantau penjualan real-time, mengelola produk, dan menganalisis tren penjualan.",
      link: "https://github.com/bangkit16/PWL_2024",
    },
    {
      nama: "Sistem Informasi Inventaris Perkakas JTI",
      gambar: inventaris,
      tool: "Laravel 10 , Bootstrap 5",
      deskripsi:
        "Sebuah aplikasi web untuk mengelola dan melacak inventaris barang jurusan Teknologi Informasi Politeknik Negeri Malang secara efisien dan terorganisir.",
      link: "https://github.com/bangkit16/Inventaris",
    },
    {
      nama: "Sistem Informasi Jasa Event Organizer (SIJEO) ",
      gambar: sijeo,
      tool: "CodeIgniter4 , Bootstrap 5",
      deskripsi:
        "Aplikasi untuk mengelola acara, pendaftaran, pembayaran, manajemen klien, dan vendor, serta menyediakan pelaporan dan notifikasi untuk mempermudah perencanaan dan pencarian vendor vendor yang ada.",
      link: "https://github.com/bangkit16/sijeo-mp",
    },
    {
      nama: "Sistem Pendukung Keputusan MAUT",
      gambar: maut,
      tool: "CodeIgniter4 , Bootstrap 5",
      deskripsi:
        "Sebuah web sederhana yang dikembangkan untuk membantu pengambilan keputusan menggunakan metode Multi-Attribute Utility Theory (MAUT). Web ini untuk membantu pengambilan keputusan dengan mengelola kriteria dan alternatif secara efisien.",
      link: "https://github.com/bangkit16/SPKMAUT",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3)

  return (
    <>
      <section id="projek">
        <div className="container mx-auto mb-20 mt-20 pt-40">
          <div className="w-full px-4">
            <h4 className="text-lg text-center font-bold uppercase mb-3 text-green-500 ">
              portofolio
            </h4>
            <h2 className="text-center font-bold text-3xl mb-8 lg:text-4xl ">
              PROJEK
            </h2>
            <p className="text-center lg:w-4/6 w-5/6 mx-auto font-medium text-base text-slate-500 mb-8 lg:text-lg">
              Berikut adalah beberapa proyek yang menunjukkan kemampuan saya
              dalam mengembangkan aplikasi web yang efektif dan inovatif.
            </p>
            <div className="flex flex-wrap">
              <AnimatePresence mode="popLayout">
                {pro.slice(0, visibleCount).map((item) => (
                  <motion.div
                    key={item.nama}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    layout
                    className="w-full lg:w-1/3"
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
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setVisibleCount((prev) => (prev >= pro.length ? 3 : prev + 3))}
                className="border-green-500 border-[3px] w-fit hover:text-green-500 font-semibold bottom-0 mb-0 lg:mt-auto mt-2 text-white bg-green-500 transition-colors rounded-full px-5 py-2 text-xl hover:bg-white"
              >
                {visibleCount >= pro.length ? 'Tutup' : 'Lihat Lainnya'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
