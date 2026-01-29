import React, { useState, useEffect, useRef } from 'react'
import PortfolioSvg from '../assets/bg-text.svg'
import MyResume from '../assets/Rajiv-Kumar-FullStack-Dev.pdf'
import { ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

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
    category: 'Frontend',
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
    className: 'invert',
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

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  // Flicker animation for background SVG
  const flickerAnimation = {
    initial: { opacity: 0.9, scale: 1 },
    animate: {
      opacity: [0.9, 0.4, 0.9, 0.2, 0.9, 0.8, 0.5, 0.9],
      scale: [1, 1.002, 0.998, 1.01, 1],
      x: [0, -2, 2, -1, 0],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'linear',
        repeatDelay: Math.random() * 2,
      },
    },
  }

  // Generate random positions for skills with better distribution
  const generateSkillPositions = () => {
    return skills.map((skill, index) => {
      const angle = (index / skills.length) * Math.PI * 2
      const radius = 35 + Math.random() * 15 // 35-50% from center
      const x = 50 + Math.cos(angle) * radius
      const y = 50 + Math.sin(angle) * radius

      return {
        ...skill,
        id: index,
        initialX: x,
        initialY: y,
        size: 32 + Math.random() * 24, // 32-56px
        duration: 20 + Math.random() * 15, // 20-35s
        delay: Math.random() * 5,
        parallaxSpeed: 0.3 + Math.random() * 0.7, // 0.3-1.0
      }
    })
  }

  const [skillPositions] = useState(generateSkillPositions)

  // Calculate distance from mouse to icon
  const getDistanceFromMouse = (iconX, iconY) => {
    if (!containerRef.current) return 1000
    const rect = containerRef.current.getBoundingClientRect()
    const iconScreenX = (iconX / 100) * rect.width
    const iconScreenY = (iconY / 100) * rect.height
    const dx = mousePosition.x - iconScreenX
    const dy = mousePosition.y - iconScreenY
    return Math.sqrt(dx * dx + dy * dy)
  }

  return (
    <div
      id='home'
      ref={containerRef}
      className='relative py-20 md:py-30 md:my-10 w-full overflow-hidden'
    >
      {/* PARALLAX TECH CLOUD BACKGROUND */}
      <div className='absolute inset-0 pointer-events-none select-none'>
        {/* Edge blur overlays - creates smooth blurred fade at corners */}

        {skillPositions.map((skill) => {
          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [0, -100 * skill.parallaxSpeed],
          )

          const distance = getDistanceFromMouse(skill.initialX, skill.initialY)
          const isNearMouse = distance < 150 // Within 150px of cursor

          // Calculate cursor influence for smooth following
          const containerRect = containerRef.current?.getBoundingClientRect()
          const iconScreenX = containerRect
            ? (skill.initialX / 100) * containerRect.width
            : 0
          const iconScreenY = containerRect
            ? (skill.initialY / 100) * containerRect.height
            : 0

          const dx = mousePosition.x - iconScreenX
          const dy = mousePosition.y - iconScreenY
          const dist = Math.sqrt(dx * dx + dy * dy)

          // Icons follow cursor within 200px radius
          const followStrength = Math.max(0, 1 - dist / 200)
          const followX = dx * followStrength * 0.3
          const followY = dy * followStrength * 0.3

          return (
            <motion.div
              key={skill.id}
              style={{
                position: 'absolute',
                left: `${skill.initialX}%`,
                top: `${skill.initialY}%`,
                y,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isNearMouse ? [0.4, 0.7, 0.4] : [0.15, 0.25, 0.15],
                scale: isNearMouse ? 1.2 : 1,
                x: [
                  0 + followX,
                  Math.sin(skill.id) * 20 + followX,
                  0 + followX,
                ],
                y: [
                  0 + followY,
                  Math.cos(skill.id) * 20 + followY,
                  0 + followY,
                ],
                rotate: isNearMouse ? [0, 15, -15, 0] : [0, 360],
              }}
              transition={{
                opacity: {
                  duration: isNearMouse ? 2 : skill.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 0.3,
                },
                x: {
                  duration: skill.duration * 0.7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                y: {
                  duration: skill.duration * 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                rotate: {
                  duration: isNearMouse ? 1.5 : skill.duration * 1.5,
                  repeat: Infinity,
                  ease: isNearMouse ? 'easeInOut' : 'linear',
                },
              }}
              className='cursor-pointer transform-gpu will-change-transform'
            >
              <motion.img
                src={skill.icon}
                alt={skill.name}
                className={`${skill.className || ''} transition-all duration-300`}
                style={{
                  width: `${skill.size}px`,
                  height: `${skill.size}px`,
                  filter: isNearMouse
                    ? 'grayscale(0%) brightness(1.2) drop-shadow(0 0 12px rgba(168,85,247,0.7))'
                    : 'grayscale(100%)',
                }}
              />
            </motion.div>
          )
        })}
      </div>

      {/* SVG FILTER */}
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

      {/* BACKGROUND SVG LAYER WITH FLICKER */}
      <motion.div
        variants={flickerAnimation}
        initial='initial'
        animate='animate'
        className='absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0'
      >
        <img
          src={PortfolioSvg}
          alt=''
          style={{ filter: 'url(#scratchy-glitch)' }}
          className='w-[90%] sm:w-full object-contain opacity-50'
        />
      </motion.div>

      {/* MAIN CONTENT */}
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
