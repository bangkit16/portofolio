import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Project from './components/sections/Project'
import Contact from './components/sections/Contact'
import Loader from './components/ui/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds delay

    return () => clearTimeout(timer)
  }, [])

  
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isLoading])

  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <Hero className="" />
      <About className="" />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
