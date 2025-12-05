/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'

function Header() {
  const [ham, setHam] = useState('')
  const [fix, setFix] = useState('')
  const navMenu = document.querySelector('#nav-menu')

  window.onscroll = function () {
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
    </header>
  )
}

export default Header
