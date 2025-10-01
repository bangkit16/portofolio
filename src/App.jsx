/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import portoIMG from '/img/portoimg.png'
import inventaris from '/img/inventaris.png'
import maut from '/img/maut.png'
import portofolio from '/img/portofolio.png'
import POS from '/img/POS.png'
import safeGuard from '/img/safeguard.png'
import sijeo from '/img/sijeo.png'
import sqla from '/img/sqla.png'
import TypingEffect from 'react-typing-effect'
import linkedin from '/svg/linkedin.svg'

// import { Carousel } from "@material-tailwind/react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons'
// import './App.css'

function Header() {
  const [ham, setHam] = useState('')
  const [fix, setFix] = useState('')
  const navMenu = document.querySelector('#nav-menu')

  window.onscroll = function () {
    // console.log("sadadads")
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    window.pageYOffset > fixedNav ? setFix('navbar-fixed') : setFix('')
  }

  function eventHandler(e) {
    navMenu.classList.toggle('hidden')
    ham === '' ? setHam('hamburger-active') : setHam('')
  }
  return (
    <header
      className={`w-full absolute top-0 ${fix}  bg-transparent z-10 items-center flex transition duration-100 ease-in-out`}
    >
      <div className="container mx-auto">
        <div className=" px-4 flex items-center justify-between relative">
          <div className="py-5 hover:text-green-700 transition ease-in-out">
            <a href="#" className="py-10 my-10 font-bold text-xl">
              BANGKIT <span className="text-green-500">CANIAGO</span>
            </a>
          </div>
          <div className="px-4 flex items-center">
            <button
              id="hamburger"
              name="hamburger"
              className={`block absolute  ${ham} lg:hidden right-4`}
              type="button"
              onClick={() => eventHandler()}
            >
              <span className="hamburger-line origin-top-left transtion duration-300 ease-in-out"></span>
              <span className="hamburger-line transtion duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transtion duration-300 ease-in-out"></span>
            </button>
            <nav
              id="nav-menu"
              className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#hero"
                    className="text-base flex text-slate-900 py-2 mx-8 group-hover:text-green-500"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base flex text-slate-900 py-2 mx-8 group-hover:text-green-500"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#skills"
                    className="text-base flex text-slate-900 py-2 mx-8 group-hover:text-green-500"
                  >
                    Skills
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#projek"
                    className="text-base flex text-slate-900 py-2 mx-8 group-hover:text-green-500"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base flex text-slate-900 py-2 mx-8 group-hover:text-green-500"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* <FontAwesomeIcon icon={faSchool} />
      <FontAwesomeIcon icon={faBuildingColumns} /> */}
    </header>
  )
}
function Hero() {
  return (
    <>
      <section id="hero">
        {/* <div className=" border-6 border-red-800 shadow-lg">sadasd</div> */}
        <div className="container mx-auto px-4 overflow-hidden mb-16">
          <div className=" flex w-full flex-wrap  mt-32 lg:mt-16 self-center  ">
            <div className="block w-full my-auto self-center lg:w-1/2">
              <span className="font-bold text-green-500 text-base lg:text-2xl">
                Halo semua, Saya
              </span>
              <h1 className="text-4xl lg:text-5xl mb-2 font-bold text-slate-900">
                Bangkit Maulana Caniago
              </h1>
              {/* <h3
        className=" lg:text-3xl text-2xl font-bold mb-1  text-slate-900
              "
       >
        Fullstack <span className="text-green-500">Developer</span>
       </h3> */}
              <TypingEffect
                className=" lg:text-3xl text-2xl font-bold mb-1  text-slate-900
              "
                text={[
                  'Fullstack Engineer',
                  'Web Developer',
                  'Backend Engineer',
                ]}
                speed={100}
                eraseSpeed={50}
                eraseDelay={1000}
                typingDelay={500}
              />
              <p className="text-base lg:text-xl mt-5">
                Berpengalaman dalam pengembangan aplikasi khususnya di bidang
                Pengembangan Website sebagai{' '}
                <span className="font-bold">Fullstack Developer</span> dan{' '}
                <span className="font-bold">Backend Developer</span>.{' '}
              </p>
              <span></span>
              <br />
              <a
                href="#contact"
                className=" rounded-xl lg:text-xl  bg-green-500 text-white font-bold py-2 px-4 text-base"
              >
                Contact Me
              </a>
            </div>
            <div className="flex  w-full self-end content-center lg:w-1/2">
              <div className="mt-10 relative">
                <img
                  className=" mx-auto inset-0 max-w-full center"
                  src={portoIMG}
                  alt=""
                />
                <span className=" absolute -bottom-0 -z-20 left-1/2 -translate-x-1/2 lg:scale-150">
                  <svg
                    className="animate-spin duration-0"
                    viewBox="0 0 200 200"
                    width="400"
                    height="400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#78e094"
                      d="M47.6,-53.3C54.5,-40.7,48,-20.3,43.8,-4.2C39.6,11.9,37.7,23.8,30.7,39.7C23.8,55.5,11.9,75.4,0,75.4C-11.9,75.4,-23.8,55.6,-39.7,39.7C-55.6,23.8,-75.4,11.9,-75.8,-0.4C-76.2,-12.7,-57.1,-25.3,-41.2,-38C-25.3,-50.6,-12.7,-63.2,3.8,-67C20.3,-70.9,40.7,-65.9,47.6,-53.3Z"
                      transform="translate(100 100) scale(1.2)"
                    />
                  </svg>
                </span>
                <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 lg:scale-150">
                  <svg
                    className="animate-spin"
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#A7F0BA"
                      d="M52.2,-40C64.2,-26.7,67.9,-5.2,61.2,9.9C54.5,25,37.4,33.6,20,42.2C2.6,50.8,-15.1,59.4,-31.1,55.2C-47.2,51.1,-61.7,34.2,-68.7,12.9C-75.8,-8.4,-75.4,-34.1,-62.7,-47.6C-50,-61,-25,-62.2,-2.4,-60.3C20.1,-58.4,40.3,-53.3,52.2,-40Z"
                      transform="translate(100 100) scale(1.2)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
function About() {
  return (
    <>
      <section id="about">
        <div className="container mb-20 mx-auto">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 w-full px-4 mb-10">
              <h4 className="text-lg font-bold uppercase text-green-500 mb-3">
                Tentang saya
              </h4>
              <h2 className="lg:text-4xl font-bold text-slate-900 text-3xl mb-3 max-w-xl">
                Yuk, Mari berkolaborasi bersama 🙌🙌
              </h2>
              <p className="lg:text-lg font-medium text-base text-slate-500 max-w-xl">
                Halo! Saya Mahasiswa jurusan Teknologi Informasi program studi
                Sistem Informasi Bisnis di Politeknik Negeri Malang dengan IPK
                3.70 (Semester 6) dan seorang web developer yang berdedikasi.
                Saya bersemangat dalam menciptakan solusi web yang inovatif dan
                memiliki keahlian dalam berbagai teknologi web untuk
                mengembangkan aplikasi yang responsif dan fungsional.
              </p>
              <div className="mt-5">
                <a
                  href="https://drive.google.com/file/d/1C1wY1PwMRufZSOsf4T1x3ByH5o2qtw0U/view?usp=sharing"
                  target="blank"
                  className="rounded-xl lg:text-xl  bg-green-500 text-white font-semibold py-2 px-4 text-base hover:bg-white border-2 border-green-500 hover:text-green-500 transition"
                >
                  Lihat Resume CV
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1qBZJ9uVAb2i_-UPJPDi5o2hGbaKY34wS?usp=sharing"
                  target="blank"
                  className="rounded-xl lg:text-xl  bg-green-500 text-white font-semibold py-2 px-4 text-base hover:bg-white border-2 border-green-500 hover:text-green-500 transition ml-4"
                >
                  Lihat Sertifikat
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-4">
              <h3 className="lg:pt-10 lg:text-3xl font-semibold text-slate-900 text-2xl mb-3 max-w-xl">
                Let's Connect
              </h3>
              <p className="lg:text-lg font-medium text-base text-slate-500 mb-6">
                Jika Anda memiliki pertanyaan, saran, atau hanya ingin menyapa,
                jangan ragu untuk menghubungi saya melalui saya. Saya akan
                segera menghubungi Anda kembali!
              </p>
              <div className="flex items-center">
                <a
                  href="https://www.linkedin.com/in/bangkit-maulana-caniago/"
                  className="w-16 h-16 mr-3 border rounded-full flex justify-center items-center border-slate-300 hover:bg-green-500 hover:text-white transition"
                  target="blank"
                >
                  <svg
                    role="img"
                    className="fill-current"
                    width="30"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/+6282232801273"
                  className="w-16 h-16 mr-3 border rounded-full flex justify-center items-center border-slate-300 hover:bg-green-500 hover:text-white transition"
                  target="blank"
                >
                  <svg
                    role="img"
                    width="30"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
                <a
                  href="mailto:bangkitcaniago@gmail.com"
                  className="w-16 h-16 mr-3 border rounded-full flex justify-center items-center border-slate-300 hover:bg-green-500 hover:text-white transition"
                  target="blank"
                >
                  <svg
                    role="img"
                    className="fill-current"
                    width="30"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Gmail</title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/bangkit_caniago/"
                  className="w-16 h-16 mr-3 border rounded-full flex justify-center items-center border-slate-300 hover:bg-green-500 hover:text-white transition"
                  target="blank"
                >
                  <svg
                    role="img"
                    className="fill-current"
                    width="30"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                  </svg>
                </a>
                <a
                  href="https://github.com/bangkit16"
                  className="w-16 h-16 mr-3 border rounded-full flex justify-center items-center border-slate-300 hover:bg-green-500 hover:text-white transition"
                  target="blank"
                >
                  <svg
                    role="img"
                    width="30"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Pendidikan() {
  function Sekolah(props) {
    const nama = props.nama
    const icon = props.icon
    const tahun = props.tahun
    const jurusan = props.jurusan

    return (
      <>
        <div className="w-full flex flex-warp">
          {/* <Sekolah huruf="jhjhjhgdasd" /> */}
          <span className="text-green-500 mx-auto text-[10rem] text-center">
            <i className="fa-solid fa-school-flag  "></i>
            {/* <i className="fa-solid fa-building-columns  "></i> */}
          </span>
        </div>
        {/* <h1>{huruf}</h1> */}
      </>
    )
  }
  return (
    <>
      <section id="pendidikan" className="bg-slate-100">
        {/* <div className=" border-6 border-red-800 shadow-lg">sadasd</div> */}
        0
        <div className="container mx-auto border-2 px-4 mb-64 mt-20">
          <h1 className="text-center font-bold text-3xl">Pendidikan</h1>
          <div className=" flex w-full border-2 flex-wrap mt-14 ">
            <Sekolah />
          </div>
        </div>
      </section>
    </>
  )
}
function Skills() {
  function skill(props) {
    return (
      <>
        <div>
          <h2>CodeIgniter</h2>
          <span>Intermidate</span>
        </div>
        <div className="text-[#EF4223] w-full hover:text-green-500 transition-colors">
          <svg
            role="img"
            className="fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>CodeIgniter</title>
            <path d="M11.466 0c.88 1.423-.28 3.306-1.207 4.358-.899 1.02-1.992 1.873-2.985 2.8-1.066.996-2.091 2.044-2.967 3.213-1.753 2.339-2.827 5.28-2.038 8.199.788 2.916 3.314 4.772 6.167 5.429-1.44-.622-2.786-2.203-2.79-3.82-.003-1.765 1.115-3.262 2.505-4.246-.167.632-.258 1.21.155 1.774a1.68 1.68 0 0 0 1.696.642c1.487-.326 1.556-1.96.674-2.914-.872-.943-1.715-2.009-1.384-3.377.167-.685.588-1.328 1.121-1.787-.41 1.078.755 2.14 1.523 2.67 1.332.918 2.793 1.612 4.017 2.688 1.288 1.132 2.24 2.661 2.047 4.435-.208 1.923-1.736 3.26-3.45 3.936 3.622-.8 7.365-3.61 7.44-7.627.093-3.032-1.903-5.717-5.158-7.384.19.48.074.697-.058.924-.55.944-2.082 1.152-2.835.184-1.205-1.548.025-3.216.197-4.855.215-2.055-1.073-4.049-2.67-5.242z" />
          </svg>

          <h3 className="text-center mt-4 font-semibold text-slate-900 text-lg">
            CodeIgniter
          </h3>
        </div>
      </>
    )
  }
  const [show, setShow] = useState(false)

  const handleToggle = () => {
    //   setShow(!show);
  }
  return (
    <>
      <section id="skills">
        <div className="container px-4 mx-auto mb-20 mt-20 pt-40">
          <h4 className="text-lg text-center font-bold uppercase text-green-500 mb-3">
            skills
          </h4>
          <h2 className="text-center font-bold text-3xl lg:text-4xl mb-5">
            Keahlian
          </h2>
          <p className="text-center lg:w-4/6 w-5/6 mx-auto font-medium text-base text-slate-500 mb-8 lg:text-lg">
            Saya menguasai berbagai teknologi web untuk menciptakan aplikasi
            yang responsif dan fungsional.
          </p>
          <div className="w-full">
            <div className="text-green-500 flex flex-wrap  place-items-center justify-center px-4 ">
              {/* HTML */}
              <div
                className="text-[#EF4223] p-2 w-1/5 lg:text-lg md:w-1/6 lg:w-[9%] items-center flex-col flex justify-center  group relative  transition-colors"
                onClick={handleToggle}
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="fill-current group-hover:scale-[0.8] transition-transform group-hover:-translate-y-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>HTML5</title>
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                </svg>

                <h3
                  className={`text-center mt-3 font-semibold text-slate-900  transition-transform duration-300 group-hover:-translate-y-4 ${
                    show ? '-translate-y-6' : ''
                  } `}
                >
                  HTML
                </h3>
                <span className="absolute  bottom-2  text-sm lg:text-md  text-slate-900  opacity-0 transform translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2">
                  Advanced
                </span>
              </div>
              {/* PHP */}
              <div
                className="text-[#777BB4] p-2 w-1/5 lg:text-lg md:w-1/6 lg:w-[9%] items-center flex-col flex justify-center  group relative  transition-colors"
                onClick={handleToggle}
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="fill-current group-hover:scale-[0.8] transition-transform group-hover:-translate-y-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>PHP</title>
                  <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
                </svg>

                <h3
                  className={`text-center mt-3 font-semibold text-slate-900  transition-transform duration-300 group-hover:-translate-y-4 ${
                    show ? '-translate-y-6' : ''
                  } `}
                >
                  PHP
                </h3>
                <span className="absolute  bottom-2  text-sm lg:text-md  text-slate-900  opacity-0 transform translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2">
                  Advanced
                </span>
              </div>
              {/* JavaScript */}
              <div
                className="text-[#F7DF1E] p-2 w-1/5 lg:text-lg md:w-1/6 lg:w-[9%] items-center flex-col flex justify-center  group relative  transition-colors"
                onClick={handleToggle}
              >
                <svg
                  role="img"
                  className="fill-current group-hover:scale-[0.8] transition-transform group-hover:-translate-y-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>JavaScript</title>
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                </svg>

                <h3
                  className={`text-center mt-3 font-semibold text-slate-900  transition-transform duration-300 group-hover:-translate-y-4 ${
                    show ? '-translate-y-6' : ''
                  } `}
                >
                  Javascript
                </h3>
                <span className="absolute  bottom-2  text-sm lg:text-md  text-slate-900  opacity-0 transform translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2">
                  Intermidiate
                </span>
              </div>
              {/* Node JS */}
              <div
                className="text-[#5FA04E] p-2 w-1/5 lg:text-lg md:w-1/6 lg:w-[9%] items-center flex-col flex justify-center  group relative  transition-colors"
                onClick={handleToggle}
              >
                <svg
                  role="img"
                  className="fill-current group-hover:scale-[0.8] transition-transform group-hover:-translate-y-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Node.js</title>
                  <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                </svg>

                <h3
                  className={`text-center mt-3 font-semibold text-slate-900  transition-transform duration-300 group-hover:-translate-y-4 ${
                    show ? '-translate-y-6' : ''
                  } `}
                >
                  NodeJS
                </h3>
                <span className="absolute  bottom-2  text-sm lg:text-md  text-slate-900  opacity-0 transform translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2">
                  Beginner
                </span>
              </div>
              {/* CSS */}
              <div
                className="text-[#EF4223] p-2 w-1/5 lg:text-lg md:w-1/6 lg:w-[9%] items-center flex-col flex justify-center  group relative  transition-colors"
                onClick={handleToggle}
              >
                <svg
                  role="img"
                  className="fill-current group-hover:scale-[0.8] transition-transform group-hover:-translate-y-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>CSS3</title>
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                </svg>

                <h3
                  className={`text-center mt-3 font-semibold text-slate-900  transition-transform duration-300 group-hover:-translate-y-4 ${
                    show ? '-translate-y-6' : ''
                  } `}
                >
                  CSS
                </h3>
                <span className="absolute  bottom-2  text-sm lg:text-md  text-slate-900  opacity-0 transform translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2">
                  Advanced
                </span>
              </div>
              {/* CI */}
              <div
                className="text-[#EF4223] p-2 md:w-1/6 lg:w-[9%] w-1/5 lg:text-lg items-center flex-col flex justify-center  group relative  transition-colors"
                onClick={handleToggle}
              >
                <svg
                  role="img"
                  className="fill-current group-hover:scale-[0.8] transition-transform group-hover:-translate-y-2"
                  viewBox="0 0 24 24"
                  width=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>CodeIgniter</title>
                  <path d="M11.466 0c.88 1.423-.28 3.306-1.207 4.358-.899 1.02-1.992 1.873-2.985 2.8-1.066.996-2.091 2.044-2.967 3.213-1.753 2.339-2.827 5.28-2.038 8.199.788 2.916 3.314 4.772 6.167 5.429-1.44-.622-2.786-2.203-2.79-3.82-.003-1.765 1.115-3.262 2.505-4.246-.167.632-.258 1.21.155 1.774a1.68 1.68 0 0 0 1.696.642c1.487-.326 1.556-1.96.674-2.914-.872-.943-1.715-2.009-1.384-3.377.167-.685.588-1.328 1.121-1.787-.41 1.078.755 2.14 1.523 2.67 1.332.918 2.793 1.612 4.017 2.688 1.288 1.132 2.24 2.661 2.047 4.435-.208 1.923-1.736 3.26-3.45 3.936 3.622-.8 7.365-3.61 7.44-7.627.093-3.032-1.903-5.717-5.158-7.384.19.48.074.697-.058.924-.55.944-2.082 1.152-2.835.184-1.205-1.548.025-3.216.197-4.855.215-2.055-1.073-4.049-2.67-5.242z" />
                </svg>

                <h3
                  className={`text-center mt-3 font-semibold text-slate-900  transition-transform duration-300 group-hover:-translate-y-4 ${
                    show ? '-translate-y-6' : ''
                  } `}
                >
                  CodeIgniter
                </h3>
                <span className="absolute  bottom-2  text-sm lg:text-md  text-slate-900  opacity-0 transform translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2">
                  Intermidiate
                </span>
              </div>
              {/* MYSQL */}
              <div className="text-[#4479A1] p-2 md:w-1/6 lg:w-[9%] w-1/5 lg:text-lg items-center flex-col flex justify-center  group relative   transition-colors">
                <svg
                  role="img"
                  className="fill-current group-hover:scale-[0.8] transition-transform group-hover:-translate-y-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>MySQL</title>
                  <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
                </svg>
                <h3
                  className={`text-center mt-3 font-semibold text-slate-900  transition-transform duration-300 group-hover:-translate-y-4 ${
                    show ? '-translate-y-6' : ''
                  } `}
                >
                  MySQL
                </h3>
                <span className="absolute  bottom-2  text-sm lg:text-md  text-slate-900  opacity-0 transform translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2">
                  Advanced
                </span>
              </div>

              {/* LARAVEL */}
              <div className="text-[#FF2D20] p-2 md:w-1/6 lg:w-[9%] w-1/5 lg:text-lg items-center flex-col flex justify-center  group relative   transition-colors">
                <svg
                  role="img"
                  className="fill-current group-hover:scale-[0.8] transition-transform group-hover:-translate-y-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Laravel</title>
                  <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z" />
                </svg>
                <h3
                  className={`text-center mt-3 font-semibold text-slate-900  transition-transform duration-300 group-hover:-translate-y-4 ${
                    show ? '-translate-y-6' : ''
                  } `}
                >
                  Laravel
                </h3>
                <span className="absolute  bottom-2  text-sm lg:text-md  text-slate-900  opacity-0 transform translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2">
                  Intermidiate
                </span>
              </div>
              {/* BOOTSRAP */}
              <div className="text-[#7952B3] p-2 md:w-1/6 lg:w-[9%] w-1/5 lg:text-lg items-center flex-col flex justify-center  group relative  transition-colors">
                <svg
                  role="img"
                  className="fill-current group-hover:scale-[0.8] transition-transform group-hover:-translate-y-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Bootstrap</title>
                  <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
                </svg>
                <h3
                  className={`text-center mt-3 font-semibold text-slate-900  transition-transform duration-300 group-hover:-translate-y-4 ${
                    show ? '-translate-y-6' : ''
                  } `}
                >
                  Bootstrap
                </h3>
                <span className="absolute  bottom-2  text-sm lg:text-md  text-slate-900  opacity-0 transform translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2">
                  Advanced
                </span>
              </div>

              {/* TAILWIND */}
              <div className="text-[#06B6D4] p-2 md:w-1/6 lg:w-[9%] w-1/5 lg:text-lg items-center flex-col flex justify-center  group relative   transition-colors">
                <svg
                  role="img"
                  className="fill-current group-hover:scale-[0.8] transition-transform group-hover:-translate-y-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Tailwind CSS</title>
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
                <h3
                  className={`text-center mt-3 font-semibold text-slate-900  transition-transform duration-300 group-hover:-translate-y-4 ${
                    show ? '-translate-y-6' : ''
                  } `}
                >
                  Tailwind{' '}
                </h3>
                <span className="absolute  bottom-2  text-sm lg:text-md  text-slate-900  opacity-0 transform translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2">
                  Intermidiate
                </span>
              </div>
              {/* REACT */}
              <div className="text-[#61DAFB] p-2 md:w-1/6 lg:w-[9%] w-1/5 lg:text-lg items-center flex-col flex justify-center  group relative   transition-colors">
                <svg
                  role="img"
                  className="fill-current group-hover:scale-[0.8] transition-transform group-hover:-translate-y-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>React</title>
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                </svg>
                <h3
                  className={`text-center mt-3 font-semibold text-slate-900  transition-transform duration-300 group-hover:-translate-y-4 ${
                    show ? '-translate-y-6' : ''
                  } `}
                >
                  ReactJS
                </h3>
                <span className="absolute  bottom-2  text-sm lg:text-md  text-slate-900  opacity-0 transform translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2">
                  Beginner
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
function Project() {
  function Porto({ nama, gambar, tool, deskripsi, link }) {
    //   const nama = props.nama;
    //   const gambar = props.gambar;
    //   const tool = props.tool;
    //   const deskripsi = props.deskripsi;
    //   const link = props.link;

    return (
      <>
        <div className="w-full lg:w-1/3 relative  transition-transform">
          <div className=" border-slate-200 w-full h-[500px] relative bg-transparent rounded-xl m-2 p-4 flex flex-col">
            <div className="w-full h-[13rem]  overflow-hidden flex rounded-md">
              <img
                className=" object-cover w-full object-top hover:scale-110 transition"
                src={gambar}
                alt=""
              />
            </div>

            <h4 className="mt-4 font-bold text-lg">{nama}</h4>
            <span className="font-semibold text-base text-green-500">
              {tool}
            </span>
            <p className="text-base  h-auto text-slate-600 pr-3">{deskripsi}</p>
            <a
              href={link}
              target="blank"
              className="border-green-500 border-[3px] w-fit justify-self-end  text-green-500 font-semibold bottom-0 mb-0 lg:mt-auto mt-2  rounded-full px-5 py-2"
            >
              Visit {'</> '}
            </a>
          </div>
        </div>
      </>
    )
  }
  const Modal = () => {
    return (
      <>
        <div
          id="modal"
          className="fixed  inset-0 z-[10000] px-2 flex items-center justify-center bg-gray-800 bg-opacity-75"
        >
          <div className="bg-white p-5 rounded shadow-lg max-w-6xl w-full">
            <div className="container ">
              <button
                id="closeModal"
                className="bg-red-500 w-fit text-end mr-auto text-white p-2 rounded"
              >
                Close
              </button>
            </div>
            {/* <h2 className="text-xl font-bold mb-4">This is a Modal</h2> */}
            {/* <p className="mb-4">This is the modal content.</p> */}
          </div>
        </div>
      </>
    )
  }

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
            {/* <Modal /> */}
            <div className="flex flex-wrap transition">
              {pro.slice(0, visibleCount).map((item, index) => (
                <Porto
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
    const whatsappMessage = `Nama: ${formData.name}\nEmail: ${formData.email}\nPesan: ${formData.message}`
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
                {/* <h2 className="text-2xl font-bold mb-6">Contact Me</h2> */}
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
                    //   @click="sendToWhatsapp"
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

function Footer() {
  return (
    <>
      <footer className="w-full bg-slate-800 glossy-effect ">
        <div className="container px-4 mx-auto pt-10 pb-6 text-white">
          <div className="w-full px-4 flex flex-wrap">
            <a
              href="#hero"
              className="py-10  mb-30 font-bold text-3xl hover:text-green-500 transition-colors"
            >
              BANGKIT <span className="text-green-500">CANIAGO</span>
            </a>
            <div className="flex flex-wrap w-full justify-center">
              <div className="w-full block lg:w-1/3 mb-6">
                <h3 className="text-2xl mb-4">Kontak</h3>
                <div className="w-full block pl-3">
                  <a
                    href="mailto:bangkitcaniago@gmail.com"
                    target="blank"
                    className=" mt-2 flex align-middle items-center group"
                  >
                    <span className="group-hover:text-green-500 mb-3 transition-colors">
                      bangkitcaniago@gmail.com
                    </span>
                  </a>
                  <a
                    href="https://wa.me/+6282232801273"
                    className="flex group align-middle items-center"
                    target="blank"
                  >
                    <span className="group-hover:text-green-500 mb-3 transition-colors">
                      082232801273
                    </span>
                  </a>
                  <span className="hover:text-green-500 mb-3 transition-colors">
                    Jalan Raya Bandung-Prigi, Bantengan, Bandung, Tulungagung
                  </span>
                </div>
              </div>
              <div className="w-full block lg:w-1/3 mb-6">
                <h3 className="text-2xl mb-4">Navigasi</h3>
                <ul className="block text-white">
                  <li className="group">
                    <a
                      href="#hero"
                      className="text-base flex py-2 ml-3 group-hover:text-green-500"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base flex py-2 ml-3 group-hover:text-green-500"
                    >
                      Tentang Saya
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#skills"
                      className="text-base flex py-2 ml-3 group-hover:text-green-500"
                    >
                      Skills
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#projek"
                      className="text-base flex py-2 ml-3 group-hover:text-green-500"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base flex py-2 ml-3 group-hover:text-green-500"
                    >
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full block lg:w-1/3 ">
                <h3 className="text-2xl mb-4">Follow Me</h3>
                <div className="flex items-center text-slate-400 mt-2">
                  <a
                    href="https://www.linkedin.com/in/bangkit-maulana-caniago/"
                    className="w-9 h-9 mr-3 border rounded-full flex justify-center items-center border-slate-300 hover:bg-green-500 hover:text-white transition"
                    target="blank"
                  >
                    <svg
                      role="img"
                      className="fill-current"
                      width="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/+6282232801273"
                    className="w-9 h-9 mr-3 border rounded-full flex justify-center items-center border-slate-300 hover:bg-green-500 hover:text-white transition"
                    target="blank"
                  >
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
                  </a>
                  <a
                    href="mailto:bangkitcaniago@gmail.com"
                    className="w-9 h-9 mr-3 border rounded-full flex justify-center items-center border-slate-300 hover:bg-green-500 hover:text-white transition"
                    target="blank"
                  >
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
                  </a>
                  <a
                    href="https://www.instagram.com/bangkit_caniago/"
                    className="w-9 h-9 mr-3 border rounded-full flex justify-center items-center border-slate-300 hover:bg-green-500 hover:text-white transition"
                    target="blank"
                  >
                    <svg
                      role="img"
                      className="fill-current"
                      width={20}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Instagram</title>
                      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/bangkit16"
                    className="w-9 h-9 mr-3 border rounded-full flex justify-center items-center border-slate-300 hover:bg-green-500 hover:text-white transition"
                    target="blank"
                  >
                    <svg
                      role="img"
                      width="20"
                      className="fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </div>
              </div>

              <hr />

              <h5 className="text-center text-slate-500 mt-6">
                &copy; 2024 Reserved by Bangkit Maulana Caniago
              </h5>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

function App() {
  return (
    <>
      <Header />
      <Hero className="" />
      <About className="" />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
