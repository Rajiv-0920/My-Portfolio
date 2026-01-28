import React, { useState } from 'react'
import PortfolioSvg from '../assets/bg-text.svg'
import MyResume from '../assets/Rajiv-Kumar-FullStack-Dev.pdf'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  // --- NEW: FLICKER ANIMATION VARIANTS ---
  const flickerAnimation = {
    initial: { opacity: 0.9, scale: 1 },
    animate: {
      // Rapidly changing opacity creates the "flicker"
      opacity: [0.9, 0.4, 0.9, 0.2, 0.9, 0.8, 0.5, 0.9],
      // Tiny scale changes and X-axis shifts create the "scratchy/glitch" look
      scale: [1, 1.002, 0.998, 1.01, 1],
      x: [0, -2, 2, -1, 0],
      transition: {
        duration: 0.3, // Very fast duration for a scratchy feel
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'linear',
        // Adding random delays to make it look "broken" rather than rhythmic
        repeatDelay: Math.random() * 2,
      },
    },
  }

  return (
    <div id='home' className='relative my-20 md:my-30 w-full overflow-hidden'>
      {/* BACKGROUND SVG LAYER WITH FLICKER */}
      {/* Add this SVG Filter anywhere in your HeroSection.jsx */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id='scratchy-glitch'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.01'
            numOctaves='3'
            result='noise'
          />
          <feDisplacementMap in='SourceGraphic' in2='noise' scale='5' />
        </filter>
      </svg>

      {/* Update your Background SVG Layer */}
      <motion.div
        variants={flickerAnimation}
        initial='initial'
        animate='animate'
        className='absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0'
      >
        <img
          src={PortfolioSvg}
          alt=''
          style={{ filter: 'url(#scratchy-glitch)' }} // Applies the scratchy filter
          className='w-[90%] sm:w-full object-contain opacity-50' // Lowered opacity for better contrast
        />
      </motion.div>

      <div className='relative z-10 text-center px-4 flex flex-col items-center gap-4 pb-5'>
        {/* BADGE */}
        <div className='w-full max-w-5xl flex justify-center'>
          <div className='inline-flex items-center gap-3 px-3 py-1.5 mb-2 rounded-full border border-purple-500/30 bg-purple-950/30 backdrop-blur-md'>
            <span className='relative flex h-2.5 w-2.5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500'></span>
            </span>
            <span className='text-sm font-medium text-purple-100 tracking-wide font-karla'>
              Hi, I'm Rajiv Kumar
            </span>
          </div>
        </div>

        {/* HEADLINE */}
        <h2 className='text-4xl md:text-6xl font-semibold font-karla text-white leading-tight'>
          Crafting Seamless and Scalable Web <br />
          Experiences with Full-Stack
        </h2>

        {/* TILTED JAVASCRIPT ACCENT */}
        <motion.div
          initial={{ rotate: -3 }}
          whileHover={{
            rotate: 0,
            scale: 1.05,
            filter: 'drop-shadow(0 0 20px rgba(168,85,247,0.6))',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className='mt-4 mb-2 cursor-default select-none'
        >
          <div className='text-5xl md:text-7xl font-spline font-light text-vibrant-violet'>
            {`{JavaScript}`}
          </div>
        </motion.div>

        {/* DESCRIPTION */}
        <p className='mt-6 text-gray-300 max-w-5xl mx-auto text-lg leading-relaxed'>
          <span className='font-spline font-light text-white'>
            Full-Stack JavaScript Engineer.
          </span>{' '}
          <span className='font-karla font-light'>
            I deliver seamless, production-ready web experiences by mastering
            the MERN framework, ensuring both powerful backends and dynamic
            frontends.
          </span>
        </p>

        {/* BUTTONS */}
        <div className='mt-15 flex flex-wrap justify-center gap-6'>
          <motion.a
            href={MyResume}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ rotate: -1, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='group relative overflow-hidden rounded-full px-15 py-3 bg-purple-600/20 border border-purple-500/50 text-white transition-all flex items-center justify-center'
          >
            <div className='absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent'></div>
            <span className='relative z-10 flex items-center'>
              <span>View CV</span>
              <ArrowUpRight
                size={18}
                className='ml-2 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300'
              />
            </span>
            <div className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md bg-purple-500/20 -z-10'></div>
          </motion.a>

          <motion.a
            href='#projects'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => handleScroll(e, 'projects')}
            className='group rounded-full px-15 py-3 bg-transparent border border-white/30 text-white hover:border-purple-500/50 hover:text-purple-200 transition-all'
          >
            Projects
            <span className='inline-block ml-2 transition-transform group-hover:translate-y-1'>
              ↓
            </span>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
