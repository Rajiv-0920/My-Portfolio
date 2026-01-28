import React from 'react'
import { motion } from 'framer-motion'

const Title = ({ title, subtitle }) => {
  return (
    <div className='pt-12 relative flex flex-col items-center justify-center mb-24 group'>
      {/* 1. Ghost Text (Background Layer) */}
      <motion.span
        initial={{ opacity: 0.12, scale: 1 }}
        whileInView={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1 }}
        className='absolute text-[5rem] sm:text-[7rem] md:text-[10rem] font-black text-transparent font-karla uppercase tracking-[0.2em] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none'
        style={{ WebkitTextStroke: '1px #bc6fff' }}
      >
        {subtitle || title}
      </motion.span>

      {/* 2. Main Title (Middle Layer) */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='relative z-10 text-4xl md:text-6xl font-bold text-white font-karla tracking-tight'
      >
        {title}
      </motion.h2>

      {/* 3. The "Stuff" (Glowing Line Layer) */}
      <div className='relative z-10 mt-6 flex items-center justify-center'>
        {/* Animated Gradient Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '8rem' }}
          className='h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent'
        />

        {/* The Pulsing Core Dot */}
        <div className='absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_#fff,0_0_20px_#a855f7,0_0_30px_#a855f7]'>
          {/* Outer Ring Animation */}
          <div className='absolute -inset-2 rounded-full border border-purple-500/30 animate-ping' />
        </div>
      </div>
    </div>
  )
}

export default Title
