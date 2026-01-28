import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import MyImage from '../assets/profile.jpg'

const AboutSection = () => {
  // Animation variant for a smooth fade-in and slide-up effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Staggered delay based on index
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section
      id='about'
      className='relative w-full text-white overflow-hidden py-10'
    >
      <div className='container mx-auto px-4'>
        {/* HEADER */}
        <Title title='Who Am I' subtitle='About' />

        {/* BENTO GRID */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20'>
          {/* BLOCK 1: MAIN INTRO */}
          <motion.div
            custom={0}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-colors'
          >
            <h3 className='text-2xl font-bold mb-4'>More than just code.</h3>
            <p className='text-gray-300 leading-relaxed font-karla text-lg'>
              I'm a Full Stack Engineer who bridges the gap between{' '}
              <span className='text-purple-300'>functional code</span> and{' '}
              <span className='text-purple-300'>visual design</span>. While I
              specialize in the MERN stack, my true skill is solving difficult
              problems with simple, scalable solutions.
              <br />
              <br />I don't just write software; I build products that people
              actually want to use.
            </p>
          </motion.div>

          {/* BLOCK 2: PROFILE PHOTO */}
          <motion.div
            custom={1}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='relative overflow-hidden rounded-3xl border border-white/10 group'
          >
            <div className='absolute inset-0 bg-purple-600/20 group-hover:bg-transparent transition-colors z-10'></div>
            <img
              src={MyImage}
              alt='Rajiv'
              className='h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700'
            />
          </motion.div>

          {/* BLOCK 3: STATS */}
          <motion.div
            custom={2}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='p-8 rounded-3xl bg-purple-900/20 border border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center'
          >
            <div>
              <span className='block text-4xl font-bold text-white'>1+</span>
              <span className='text-sm text-purple-200 uppercase tracking-wider whitespace-nowrap font-karla'>
                Years Exp.
              </span>
            </div>
            <div>
              <span className='block text-4xl font-bold text-white'>15+</span>
              <span className='text-sm text-purple-200 uppercase tracking-wider font-karla'>
                Projects
              </span>
            </div>
            <div>
              <span className='block text-4xl font-bold text-white'>100%</span>
              <span className='text-sm text-purple-200 uppercase tracking-wider font-karla'>
                Commitment
              </span>
            </div>
          </motion.div>

          {/* BLOCK 4: TECH STACK / HOBBIES */}
          <motion.div
            custom={3}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center relative overflow-hidden'
          >
            <div className='absolute top-0 right-0 w-64 h-fit bg-purple-500/10 blur-[80px] rounded-full pointer-events-none'></div>

            <h4 className='text-xl font-bold mb-4 relative z-10'>
              Beyond the Keyboard
            </h4>
            <div className='flex flex-wrap gap-3 relative z-10'>
              {[
                'Gamification',
                'UI Design',
                'System Architecture',
                'Sci-Fi Books',
                'Coffee',
              ].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className='px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all cursor-default'
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
