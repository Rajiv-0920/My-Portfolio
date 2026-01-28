import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-[100] px-4 pt-6 pointer-events-none'>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500
          border border-white/10 bg-white/5 backdrop-blur-xl rounded-full px-6
          ${scrolled ? 'py-3 w-full max-w-3xl shadow-2xl shadow-purple-500/10' : 'py-4 w-full max-w-5xl'}
        `}
      >
        {/* LOGO */}
        <a
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='cursor-pointer group'
        >
          <span className='text-lg font-spline tracking-tighter text-white'>
            <span className='text-purple-400'>&lt;</span>
            Rajiv Kumar
            <span className='text-purple-400'> /&gt;</span>
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <div className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-300'>
          {['Home', 'Skills', 'Projects', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item.toLowerCase())}
              className='hover:text-white text-[18px] font-light tracking-wider font-karla hover:scale-105 transition-all'
            >
              {item}
            </a>
          ))}

          {/* PRIMARY CONTACT BUTTON */}
          <a
            href='#contact'
            onClick={(e) => handleScroll(e, 'contact')}
            className='px-6 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-white text-[18px] font-light tracking-wider font-karla hover:bg-purple-600/40 hover:scale-105 transition-all'
          >
            Contact Us
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-white text-2xl p-1'
        >
          {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className='absolute top-24 left-4 right-4 bg-[#030014]/35 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col gap-6 text-center pointer-events-auto md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden'
          >
            <div className='absolute -top-10 -right-10 w-32 h-32 bg-purple-600/20 blur-[50px] pointer-events-none' />

            {['Home', 'Skills', 'Projects', 'About'].map((item) => (
              <a
                key={item}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                className='text-xl font-light text-gray-300 hover:text-purple-400 border-b border-white/5 pb-4 font-karla tracking-wide'
              >
                {item}
              </a>
            ))}

            {/* MOBILE PRIMARY CTA */}
            <a
              onClick={(e) => handleScroll(e, 'contact')}
              className='text-xl font-medium text-white bg-purple-600/30 border border-purple-500/50 py-3 rounded-2xl font-karla tracking-wide'
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
