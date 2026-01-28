import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  {
    name: 'Github',
    icon: <Github size={20} />,
    url: 'https://github.com/Rajiv-0920',
  },
  {
    name: 'Linkedin',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/rajiv0920',
  },
  {
    name: 'Twitter',
    icon: <Twitter size={20} />,
    url: 'https://twitter.com/Rajiv0920',
  },
]

const SocialIcons = () => {
  return (
    <div className='flex gap-5 pt-6'>
      {socialLinks.map((social, i) => (
        <motion.a
          key={social.name}
          href={social.url}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={social.name}
          // Entry Animation: Pops in one by one
          initial={{ opacity: 0, scale: 0.8, y: 1 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.5 + i * 0.1,
            duration: 0.4,
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          // Hover State
          whileHover={{ y: -5 }}
          className='group relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:rounded-full hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
        >
          {/* Tooltip */}
          <span className='absolute -top-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 text-xs font-karla text-purple-300 bg-[#030014] px-2 py-1 rounded border border-purple-500/20 whitespace-nowrap'>
            {social.name}
          </span>

          {/* Icon */}
          <div className='text-gray-400 transition-all duration-300 group-hover:text-white group-hover:scale-110'>
            {social.icon}
          </div>
        </motion.a>
      ))}
    </div>
  )
}

export default SocialIcons
