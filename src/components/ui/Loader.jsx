import { motion } from 'framer-motion'

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/80 backdrop-blur-sm"
    >
      <div className="relative flex flex-col items-center">
        {/* Pulse Effect Background */}
        <div className="absolute inset-0 bg-green-500 rounded-full opacity-50 animate-ping w-24 h-24"></div>
        
        {/* Logo */}
        <div className="relative z-10 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center p-4 ">
          <img src="/logo.svg" alt="Loading..." className="w-full h-full object-contain" />
        </div>
        
        {/* Loading Text */}
        <p className="mt-4 text-green-600 font-semibold tracking-widest animate-pulse">
          LOADING...
        </p>
      </div>
    </motion.div>
  )
}

export default Loader
