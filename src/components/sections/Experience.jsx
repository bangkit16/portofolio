import ExperienceCard from '../ui/ExperienceCard'

function Experience() {
  const experiences = [
    {
      company: 'PT AZ LOGISTIK (muatmuat.com) - Surabaya, Indonesia',
      date: 'Oct 2025 - Dec 2025',
      role: 'Frontend Developer (AI Operator)',
      type: 'Freelance',
      description:
        'muatmuat adalah platform ekosistem logistik digital yang menghubungkan pemilik muatan dengan penyedia jasa angkut dan tenaga kerja melalui aplikasi terintegrasi.',
      responsibilities: [
        'Mengembangkan antarmuka pengguna (UI) yang responsif dan intuitif menggunakan AI',
        'Mengintegrasikan API untuk 5+ modul utama sehingga meningkatkan stabilitas pertukaran data.',
        'Melakukan pengujian fungsional aplikasi untuk meningkatkan kualitas sistem sebelum rilis.',
        'Berkolaborasi dengan 10+ anggota tim frontend & backend dari tahap desain hingga implementasi.',
      ],
    },
    {
      company: 'CV DUTA TECHNOLOGY - Malang, Indonesia',
      date: 'Aug 2024 - Nov 2024',
      role: 'Fullstack Developer',
      type: 'Magang',
      description:
        'Software House Melayani segala pelayanan Software, meliputi Web base, Mobile App, Desktop Base, dan konsultasi dan pembangunan Jaringan Komputer',
      responsibilities: [
        'Membangun sistem PMB RPL yang digunakan oleh staff kampus STIMATA untuk proses validasi dokumen mahasiswa.',
        'Berkontribusi dalam proyek kampus selama 3 bulan dengan pendekatan project-based.',
        'Mengimplementasikan antarmuka modern berbasis Laravel + Livewire dengan Keen Theme (Bootstrap).',
        'Mengembangkan 5+ fitur utama menggunakan Laravel, Livewire, dan Bootstrap.',
        'Membangun fitur untuk 4 jenis pendaftaran (Peserta Didik Baru, Beasiswa, RPL, Alih Jenjang)',
      ],
    },
  ]

  return (
    <section id="experience">
      <div className="container mx-auto mb-16 mt-16 pt-20">
        <div className="w-full px-4">
          <h4 className="text-lg text-center font-bold uppercase mb-3 text-green-500 ">
            Riwayat
          </h4>
          <h2 className="text-center font-bold text-3xl mb-8 lg:text-4xl uppercase">
            Pengalaman Kerja
          </h2>
          <p className="text-center lg:w-4/6 w-5/6 mx-auto font-medium text-base text-slate-500 mb-12 lg:text-lg">
            Perjalanan profesional saya dalam dunia pengembangan perangkat lunak,
            dari magang hingga proyek freelance.
          </p>
          
          <div className="flex flex-col lg:flex-row max-w-full mx-auto gap-4">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                company={exp.company}
                role={exp.role}
                date={exp.date}
                type={exp.type}
                description={exp.description}
                responsibilities={exp.responsibilities}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
