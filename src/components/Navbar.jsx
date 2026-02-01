import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = ['Home', 'Skills', 'Projects', 'About']

  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Background Blur Toggle
      setScrolled(window.scrollY > 20)

      // 2. Highlighting Logic: Find which section is in view
      const sectionIds = ['home', 'skills', 'projects', 'about', 'contact']
      const scrollPosition = window.scrollY + 150 // Offset for earlier detection

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Adjust based on navbar height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
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
            <span className='text-purple-400'>&lt;</span> Rajiv Kumar{' '}
            <span className='text-purple-400'> /&gt;</span>
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <div className='hidden md:flex items-center gap-8 text-sm font-medium'>
          {navItems.map((item) => {
            const id = item.toLowerCase()
            const isActive = activeSection === id

            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => handleScrollTo(e, id)}
                className={`relative text-[18px] font-light tracking-wider font-karla transition-all hover:scale-105
                  ${isActive ? 'text-purple-400' : 'text-gray-300 hover:text-white'}
                `}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId='underline'
                    className='absolute -bottom-1 left-0 right-0 h-[2px] bg-purple-400'
                  />
                )}
              </a>
            )
          })}

          {/* CONTACT BUTTON HIGHLIGHT */}
          <a
            href='#contact'
            onClick={(e) => handleScrollTo(e, 'contact')}
            className={`px-6 py-2 border rounded-full text-[18px] font-light tracking-wider font-karla hover:scale-105 transition-all
              ${
                activeSection === 'contact'
                  ? 'bg-purple-600/60 border-purple-400 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-purple-600/20 border-purple-500/50 text-white hover:bg-purple-600/40'
              }
            `}
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
            className='absolute top-24 left-4 right-4 bg-[#030014]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col gap-6 text-center pointer-events-auto md:hidden'
          >
            {navItems.map((item) => {
              const id = item.toLowerCase()
              return (
                <a
                  key={item}
                  onClick={(e) => handleScrollTo(e, id)}
                  className={`text-xl font-light border-b border-white/5 pb-4 font-karla tracking-wide
                    ${activeSection === id ? 'text-purple-400 font-medium' : 'text-gray-300'}
                  `}
                >
                  {item}
                </a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
