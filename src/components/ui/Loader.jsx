function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity duration-500">
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
    </div>
  )
}

export default Loader
