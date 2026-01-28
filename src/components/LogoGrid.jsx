import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Add 'category' to your skills objects
const skills = [
  // FRONTEND
  {
    name: 'HTML5',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  {
    name: 'Framer Motion',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg',
    className: 'invert',
  },
  {
    name: 'Zustand',
    category: 'Frontend',
    icon: 'https://hexmos.com/freedevtools/svg_icons/zustand/zustand-original.svg',
  },
  {
    name: 'Redux',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    name: 'TanStack Query',
    category: 'Frontend', // Or 'Tools'
    icon: 'https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    className: 'invert', // Dark theme ke liye asaan rahega
  },
  // BACKEND
  {
    name: 'Node.js',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    className: 'invert',
  },
  {
    name: 'Socket.IO',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    className: 'invert',
  },

  // DATABASE
  {
    name: 'MongoDB',
    category: 'Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'MySQL',
    category: 'Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Firebase',
    category: 'Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },

  // TOOLS
  {
    name: 'Git',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Postman',
    category: 'Tools',
    icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  },
  {
    name: 'Figma',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  },
]

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools']

const LogoGrid = () => {
  const [activeTab, setActiveTab] = useState('All')

  // Filter Logic
  const filteredSkills =
    activeTab === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeTab)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  }

  return (
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
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        // UPDATED: Changed grid-cols-3 to grid-cols-4 for four items on small screens
        className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4 md:gap-6 justify-items-center w-full max-w-6xl'
      >
        <AnimatePresence mode='popLayout'>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              variants={itemVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='group relative flex flex-col items-center gap-2'
            >
              {/* Icon Glass Card */}
              <div className='relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 flex items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-md transition-all duration-500 group-hover:border-purple-500/50 group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(168,85,247,0.2)]'>
                <div className='absolute inset-0 rounded-2xl bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors duration-500' />
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`h-full w-full object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 ${skill.className || ''}`}
                />
              </div>

              {/* Label */}
              <span className='text-[10px] font-bold uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 group-hover:text-purple-300 transition-all duration-300'>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default LogoGrid
