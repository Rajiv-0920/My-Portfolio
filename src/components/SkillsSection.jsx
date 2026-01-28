import React from 'react'
import { motion } from 'framer-motion'
import LogoGrid from './LogoGrid'
import Title from './Title'

const SkillsSection = () => {
  return (
    // Added py-32 to give the whole section breathing room from other sections
    <section id='skills' className='relative w-full overflow-hidden'>
      {/* Central Background Blur */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-purple-600/10 rounded-full opacity-20 blur-[150px] pointer-events-none select-none'></div>

      <div className='relative z-10 container mx-auto px-4'>
        {/* 1. The Title (Uses its own internal mb-20) */}
        <Title title='Skills' subtitle='EXPERTISE' />

        {/* 2. Intro Paragraph - Reduced top margin, standardized bottom margin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-center max-w-3xl mx-auto mb-24'
        >
          <h4 className='font-spline text-white text-xl md:text-2xl mb-4 tracking-tight opacity-90'>
            Mastering the Modern Web Ecosystem.
          </h4>
          <p className='font-karla font-light text-gray-400 text-base md:text-lg leading-relaxed'>
            My technical expertise spans the full stack, with a deep focus on
            the <span className='text-purple-400 font-medium'>MERN stack</span>.
            I leverage these tools and frameworks to architect
            <span className='text-white opacity-90'>
              {' '}
              scalable, production-ready{' '}
            </span>
            applications that prioritize performance and user experience.
          </p>
        </motion.div>

        {/* 3. The Grid of Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <LogoGrid />
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
