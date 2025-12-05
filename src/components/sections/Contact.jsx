import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappNumber = '6282232801273' // Nomor WhatsApp Anda, gunakan kode negara tanpa tanda +
    const whatsappMessage = `Nama: ${formData.name}\\nEmail: ${formData.email}\\nPesan: ${formData.message}`
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      whatsappMessage,
    )}`

    // Buka tautan WhatsApp
    window.open(whatsappLink, '_blank')
  }

  return (
    <>
      <section id="contact">
        <div className="container mx-auto px-4 pt-24 mb-20">
          <div className="flex flex-wrap ">
            <div className="w-full mx-auto p-6  lg:w-1/2">
              <h4 className="text-lg  font-bold uppercase mb-3 text-green-500 ">
                kontak
              </h4>
              <h2 className=" font-bold text-2xl mb-4 lg:text-3xl ">
                Hubungi Saya
              </h2>

              <p className="text-gray-500 mb-6  lg:text-lg text-base">
                Jika Anda memiliki pertanyaan, saran, atau hanya ingin menyapa,
                jangan ragu untuk menghubungi saya melalui formulir ini. Saya
                siap membantu Anda😁😁
              </p>
              <a
                href="https://wa.me/+6282232801273"
                className="flex group align-middle items-center"
                target="blank"
              >
                <div className="w-12 h-12 mr-3 border rounded-full flex justify-center items-center border-slate-300 group-hover:bg-green-500 group-hover:text-white transition">
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <span className="group-hover:text-green-500 transition-colors">
                  082232801273
                </span>
              </a>
              <a
                href="mailto:bangkitcaniago@gmail.com"
                target="blank"
                className=" mt-2 flex align-middle items-center group"
              >
                <div className="w-12 h-12 mr-3 border rounded-full flex justify-center items-center border-slate-300 group-hover:bg-green-500 group-hover:text-white transition">
                  <svg
                    role="img"
                    className="fill-current"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Gmail</title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </div>
                <span className="group-hover:text-green-500 transition-colors">
                  bangkitcaniago@gmail.com
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/bangkit-maulana-caniago/"
                target="blank"
                className=" mt-2 flex align-middle items-center group"
              >
                <div className="w-12 h-12 mr-3 border rounded-full flex justify-center items-center border-slate-300 group-hover:bg-green-500 group-hover:text-white transition">
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="group-hover:text-green-500 transition-colors">
                  Bangkit Maulana Caniago
                </span>
              </a>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-2xl mx-auto p-6 bg-white border rounded-md shadow-md mt-8 lg:mt-20">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nama
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full p-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
