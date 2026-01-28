import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={18} />,
      url: 'https://github.com/Rajiv-0920',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      url: 'https://www.linkedin.com/in/rajiv0920',
    },
    {
      name: 'Twitter',
      icon: <Twitter size={18} />,
      url: 'https://twitter.com/Rajiv0920',
    },
    {
      name: 'Email',
      icon: <Mail size={18} />,
      url: 'mailto:rajiv.dev.work@gmail.com',
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='relative mt-20 border-t border-white/5'>
      <div className='max-w-7xl mx-auto px-6 py-12 flex flex-col items-center'>
        {/* Top Section: Branding & Animated Socials */}
        <div className='w-full flex flex-col md:flex-row justify-between items-center gap-8 mb-12'>
          <div
            onClick={scrollToTop}
            className='text-2xl font-bold font-karla text-white cursor-pointer group'
          >
            Rajiv
            <span className='text-purple-500 group-hover:text-purple-400 transition-colors'>
              .
            </span>
          </div>

          {/* Icon Row */}
          <div className='flex gap-4 items-center'>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300'
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright & Availability */}
        <div className='w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4'>
          <div className='flex flex-col md:flex-row items-center gap-2 md:gap-4 font-extralight'>
            <p className='text-gray-500 text-sm font-karla'>
              © {currentYear} Rajiv Kumar
            </p>
            <span className='hidden md:block text-gray-700'>|</span>
            <p className='text-gray-500 text-sm font-karla'>
              Built with{' '}
              <span className='text-purple-500/80'>React & Tailwind</span>
            </p>
          </div>

          {/* Availability Status */}
          <div className='flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/20'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
            </span>
            <span className='text-green-500/80 text-[10px] uppercase tracking-widest font-medium'>
              Available for Hire
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-24 bg-purple-600/5 blur-[120px] pointer-events-none'></div>
    </footer>
  )
}

export default Footer
