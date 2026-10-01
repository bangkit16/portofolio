import ExperienceCard from "../ui/ExperienceCard";
import { motion } from "framer-motion";
import { fadeUp, container, viewport } from "../../lib/animations";

function Experience() {
  const experiences = [
    {
      company: "CV ALAM JAYA TEXTILE - Tulungagung, Indonesia",
      date: "April 2026 - Sekarang",
      role: "Fullstack Developer",
      type: "Kontrak",
      description:
        "Alam Jaya Tekstil adalah perusahaan manufaktur di bidang produksi dan operasional garmen & tekstil.",
      responsibilities: [
        "Mengembangkan sistem ERP manufaktur produksi tekstil full-stack menggunakan Express.js + TypeScript di backend dan Next.js 14 di frontend.",
        "Mendesain arsitektur multi-role dengan 15+ modul akses terpisah: Potong, Press, Print, Sublim, Jahit, QC, Packing, Kurir, Resi, Stok Gudang, Stok Bahan, Retur, Reject, Keuangan, Marketing, dan Super Admin.",
        "Mengimplementasikan REST API dengan Express.js, Prisma ORM, PostgreSQL, JWT authentication, Swagger docs, dan Socket.IO untuk pembaruan data real-time.",
        "Membangun worker queue system menggunakan BullMQ + Redis untuk sinkronisasi pesanan dari marketplace (Shopee, TikTok) dan pemrosesan cashflow.",
        "Mengembangkan fitur real-time tracking siklus produksi tekstil secara end-to-end.",
        "Mengelola file upload aset produk ke AWS S3 via Multer.",
      ],
    },
    {
      company: "PT AZ LOGISTIK (muatmuat.com) - Surabaya, Indonesia",
      date: "Oct 2025 - Dec 2025",
      role: "Frontend Developer (AI Operator)",
      type: "Freelance",
      description:
        "muatmuat adalah platform ekosistem logistik digital terintegrasi yang menghubungkan shipper dan transporter.",
      responsibilities: [
        "Mengembangkan antarmuka pengguna (UI) modern yang responsif dan intuitif dengan bantuan AI tools.",
        "Mengintegrasikan REST API untuk 5+ modul utama guna memastikan keandalan alur data logistik.",
        "Melakukan pengujian fungsional dan UI testing aplikasi untuk menjaga stabilitas sebelum rilis produksi.",
        "Berkolaborasi lintas fungsi dengan tim engineering backend dan product manager.",
      ],
    },
    {
      company: "CV DUTA TECHNOLOGY - Malang, Indonesia",
      date: "Aug 2024 - Nov 2024",
      role: "Fullstack Developer",
      type: "Magang",
      description:
        "Software house penyedia layanan solusi web, desktop, mobile application, serta perancangan infrastruktur jaringan.",
      responsibilities: [
        "Membangun modul PMB RPL STIMATA untuk proses verifikasi dokumen administrasi calon mahasiswa baru.",
        "Mengimplementasikan antarmuka interaktif menggunakan Laravel + Livewire serta Bootstrap Keen Theme.",
        "Mengembangkan 5+ fitur inti meliputi sistem validasi pendaftaran reguler, beasiswa, dan alih jenjang.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
            Riwayat
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
            Pengalaman Kerja
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Perjalanan profesional saya dalam merancang, membangun, dan memelihara sistem aplikasi web berskala produksi.
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
