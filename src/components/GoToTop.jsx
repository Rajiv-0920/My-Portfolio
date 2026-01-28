import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down 400px
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='fixed bottom-8 right-8 z-[90]'>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            key='go-to-top'
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: 'rgba(147, 51, 234, 0.4)', // Matches your purple hover theme
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className='flex h-12 w-12 items-center justify-center rounded-full 
                       bg-white/5 backdrop-blur-xl border border-white/10 
                       text-purple-400 shadow-2xl transition-colors cursor-pointer'
            aria-label='Back to top'
          >
            {/* The Arrow with a floating animation */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ArrowUp size={24} />
            </motion.div>

            {/* Subtle glow ring */}
            <div className='absolute inset-0 rounded-full border border-purple-500/20 animate-pulse' />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GoToTop
