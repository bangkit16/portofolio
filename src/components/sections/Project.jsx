/* eslint-disable react/prop-types */
import { useState } from 'react'
import ProjectCard from '../ui/ProjectCard'
import inventaris from '/img/inventaris.png'
import maut from '/img/maut.png'
import portofolio from '/img/portofolio.png'
import POS from '/img/POS.png'
import safeGuard from '/img/safeguard.png'
import sijeo from '/img/sijeo.png'
import sqla from '/img/sqla.png'

function Project() {
  const pro = [
    {
      nama: 'Sistem Pendukung Keputusan MAUT',
      gambar: maut,
      tool: 'CodeIgniter4 , Bootstrap 5',
      deskripsi:
        'Sebuah web sederhana yang dikembangkan untuk membantu pengambilan keputusan menggunakan metode Multi-Attribute Utility Theory (MAUT). Web ini untuk membantu pengambilan keputusan dengan mengelola kriteria dan alternatif secara efisien.',
      link: 'https://github.com/bangkit16/SPKMAUT',
    },
    {
      nama: 'Sistem Informasi Jasa Event Organizer (SIJEO) ',
      gambar: sijeo,
      tool: 'CodeIgniter4 , Bootstrap 5',
      deskripsi:
        'Aplikasi untuk mengelola acara, pendaftaran, pembayaran, manajemen klien, dan vendor, serta menyediakan pelaporan dan notifikasi untuk mempermudah perencanaan dan pencarian vendor vendor yang ada.',
      link: 'https://github.com/bangkit16/sijeo-mp',
    },
    {
      nama: 'Sistem Informasi Inventaris Perkakas JTI',
      gambar: inventaris,
      tool: 'Laravel 10 , Bootstrap 5',
      deskripsi:
        'Sebuah aplikasi web untuk mengelola dan melacak inventaris barang jurusan Teknologi Informasi Politeknik Negeri Malang secara efisien dan terorganisir.',
      link: 'https://github.com/bangkit16/Inventaris',
    },
    {
      nama: 'Personal Web Portofolio',
      gambar: portofolio,
      tool: 'ReactJs , Tailwind',
      deskripsi:
        'Portofolio web pribadi yang digunankan menampilkan karya, proyek, keterampilan, dan pengalaman saya, digunakan untuk menunjukkan kemampuan dan pencapaian kepada calon klien atau pemberi kerja.',
      link: 'https://github.com/bangkit16/portofolio',
    },
    {
      nama: 'Sistem Informasi Point Of Sales',
      gambar: POS,
      tool: 'Laravel 10 , Bootstrap 5',
      deskripsi:
        'Sistem Informasi Point of Sales (POS) ini menyediakan dashboard intuitif dan grafik informatif untuk memantau penjualan real-time, mengelola produk, dan menganalisis tren penjualan.',
      link: 'https://github.com/bangkit16/PWL_2024',
    },
    {
      nama: 'SafeGuard',
      gambar: safeGuard,
      tool: 'Laravel 10 , Bootstrap 5',
      deskripsi:
        'Digitalisasi HSSE untuk Keselamatan yang Lebih Cerdas dan Efisien',
      link: 'https://save-guard.com/',
    },
    {
      nama: 'SQL Adventure : Journey to Database Mastery',
      gambar: sqla,
      tool: 'Laravel 10 , Bootstrap 5',
      deskripsi:
        'SQL Adventure adalah platform pembelajaran SQL interaktif berbasis storytelling yang memungkinkan pengguna belajar dan mempraktikkan query SQL melalui tantangan dan latihan langsung. ',
      link: 'https://sqla.gerbangbelajar.id/',
    },
  ]

  const [visibleCount, setVisibleCount] = useState(3)

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 3)
  }

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
            <div className="flex flex-wrap transition">
              {pro.slice(0, visibleCount).map((item, index) => (
                <ProjectCard
                  key={index}
                  nama={item.nama}
                  gambar={item.gambar}
                  tool={item.tool}
                  deskripsi={item.deskripsi}
                  link={item.link}
                />
              ))}
            </div>
            {visibleCount < pro.length && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={showMore}
                  className="border-green-500 border-[3px] w-fit hover:text-green-500 font-semibold bottom-0 mb-0 lg:mt-auto mt-2 text-white bg-green-500 transition-colors  rounded-full px-5 py-2 text-xl hover:bg-white"
                >
                  Lihat Lainnya
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
