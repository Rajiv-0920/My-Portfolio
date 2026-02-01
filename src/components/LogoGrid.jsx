import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, RadioTower } from 'lucide-react'
import skills from '../data/skills.json'

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools']

const LogoGrid = () => {
  const [activeTab, setActiveTab] = useState('All')
  const [selectedSkill, setSelectedSkill] = useState(null)

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedSkill) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [selectedSkill])

  const filteredSkills =
    activeTab === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeTab)

  return (
    <>
      <div className='flex flex-col items-center gap-8 w-full px-4'>
        {/* 1. Filter Tabs */}
        <div className='flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-5'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 relative overflow-hidden ${
                activeTab === cat
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId='active-pill'
                  className='absolute inset-0 bg-purple-600 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className='relative z-10'>{cat}</span>
            </button>
          ))}
        </div>

        {/* 2. Compact Logo Grid */}
        <motion.div
          initial='hidden'
          animate='visible'
          className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4 md:gap-6 justify-items-center w-full max-w-6xl'
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSelectedSkill(skill)}
                className='group relative flex flex-col items-center gap-2 cursor-pointer'
              >
                <div className='relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 flex items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-md transition-all duration-500 group-hover:border-purple-500/50 group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(168,85,247,0.2)]'>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`h-full w-full object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 ${skill.className || ''}`}
                  />
                </div>
                <span className='text-[10px] font-bold uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 group-hover:text-purple-300 transition-all duration-300'>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 3. Modal using Portal */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence mode='wait'>
            {selectedSkill && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='fixed inset-0 bg-[#0e011e9f] backdrop-blur-md z-[10000] flex items-center justify-center p-4 cursor-auto'
                onClick={() => setSelectedSkill(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className='relative bg-[#1a0b2e] border border-purple-500/20 rounded-3xl max-w-2xl w-full max-h-[85vh] shadow-2xl cursor-default flex flex-col overflow-hidden'
                >
                  <div className='sticky top-0 z-50 p-8 pb-6 bg-[#1a0b2e]/80 backdrop-blur-2xl border-b border-white/5 flex items-center justify-between'>
                    <div className='flex items-center gap-6 perspective-1000'>
                      <motion.div
                        whileHover={{
                          rotateY: 20,
                          rotateX: -15,
                          scale: 1.1,
                          transition: {
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                          },
                        }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className='relative h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center p-5 rounded-3xl bg-white/[0.08] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden'
                      >
                        <motion.div
                          initial={{ x: '-150%' }}
                          animate={{ x: '150%' }}
                          transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: 'linear',
                            delay: 1,
                          }}
                          className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12'
                        />
                        <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none' />
                        <motion.img
                          src={selectedSkill.icon}
                          alt={selectedSkill.name}
                          animate={{ scale: [1, 1.03, 1] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className={`h-full select-none w-full object-contain relative z-10 drop-shadow-[0_10px_10px_rgba(0, 0, 0, 0.5)] ${selectedSkill.className || ''}`}
                        />
                      </motion.div>

                      <div>
                        <h3 className='text-2xl sm:text-4xl font-bold text-white mb-1 tracking-tight'>
                          {selectedSkill.name}
                        </h3>
                        <span className='px-4 py-1.5 text-[10px] font-black tracking-widest uppercase text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20'>
                          {selectedSkill.category}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedSkill(null)}
                      className='p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer group'
                    >
                      <X className='h-6 w-6 text-white transition-transform group-hover:rotate-90' />
                    </button>
                  </div>

                  {/* SCROLLABLE CONTENT AREA */}
                  <div className='flex-1 overflow-y-auto p-8 pt-6 space-y-10 custom-scrollbar relative'>
                    {/* Decorative Background Glows */}
                    <div className='absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none' />
                    <div className='absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none' />

                    {/* Expertise Section */}
                    <div className='relative z-10'>
                      <h4 className='text-lg font-semibold tracking-wider text-white mb-5 flex items-center gap-3'>
                        <div className='h-5 w-1.5 bg-purple-500 rounded-full' />
                        Expertise
                      </h4>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {selectedSkill.knowledge.map((item, i) => (
                          <div
                            key={i}
                            className='flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-colors'
                          >
                            <div className='h-1.5 w-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0' />
                            <span className='text-sm text-gray-400 leading-relaxed'>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projects Section */}
                    {selectedSkill.projects && (
                      <div className='relative z-10'>
                        <h4 className='text-lg font-semibold tracking-wider text-white mb-5 flex items-center gap-3'>
                          <div className='h-5 w-1.5 bg-purple-500 rounded-full' />
                          Key Projects
                        </h4>
                        <div className='grid gap-4'>
                          {selectedSkill.projects.map((project, i) => (
                            <div
                              key={i}
                              className='p-6 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-purple-500/20 transition-all'
                            >
                              <span className='font-semibold tracking-wider text-base text-white/90'>
                                {project.name}
                              </span>
                              <div className='flex items-center gap-3'>
                                {project.github && (
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className='text-center'
                                  >
                                    <a
                                      href={project.github}
                                      target='_blank'
                                      rel='noopener noreferrer'
                                      className='group relative inline-flex items-center justify-center px-5 text-xs py-1.5 font-karla overflow-hidden rounded-full border border-purple-500/40 bg-purple-500/5 text-white transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]'
                                    >
                                      {/* Shimmer Effect */}

                                      <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]'></span>

                                      <span className='relative flex items-center gap-3 tracking-wide'>
                                        <Github className='h-3.5 w-3.5 group-hover:rotate-12 transition-transform' />{' '}
                                        Code
                                      </span>
                                    </a>
                                  </motion.div>
                                )}

                                {project.live && (
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className='text-center'
                                  >
                                    <a
                                      href={project.live}
                                      target='_blank'
                                      rel='noopener noreferrer'
                                      className='group relative inline-flex items-center justify-center px-5 text-xs py-1.5 font-karla overflow-hidden rounded-full border border-purple-500/40 bg-purple-500/5 text-white transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]'
                                    >
                                      {/* Shimmer Effect */}

                                      <span className='absolute inset-0 w-full h-full bg-purple-600/50 hover:bg-purple-600/30 border border-purple-500/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]'></span>

                                      <span className='relative flex items-center gap-3 tracking-wide'>
                                        <RadioTower className='h-3.5 w-3.5 group-hover:rotate-12 transition-transform' />{' '}
                                        Demo
                                      </span>
                                    </a>
                                  </motion.div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  )
}

export default LogoGrid
