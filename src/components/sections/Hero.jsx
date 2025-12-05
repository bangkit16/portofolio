import portoIMG from '/img/portoimg.png'
import TypingEffect from 'react-typing-effect'

function Hero() {
  return (
    <>
      <section id="hero">
        <div className="container mx-auto px-4 overflow-hidden mb-16">
          <div className=" flex w-full flex-wrap  mt-32 lg:mt-16 self-center  ">
            <div className="block w-full my-auto self-center lg:w-1/2">
              <span className="font-bold text-green-500 text-base lg:text-2xl">
                Halo semua, Saya
              </span>
              <h1 className="text-4xl lg:text-5xl mb-2 font-bold text-slate-900">
                Bangkit Maulana Caniago
              </h1>
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

export default Hero
