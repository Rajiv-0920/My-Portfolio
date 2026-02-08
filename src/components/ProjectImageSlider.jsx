import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectImageSlider = ({ images, isHovered, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play slider only when the parent card is hovered
  useEffect(() => {
    let interval
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 2500) // Change image every 2.5 seconds
    } else {
      setCurrentIndex(0) // Reset to first image when not hovering
    }
    return () => clearInterval(interval)
  }, [isHovered, images.length])

  return (
    <div className='relative h-full w-full'>
      <AnimatePresence mode='wait'>
        <motion.img
          key={currentIndex}
          src={Array.isArray(images) ? images[currentIndex] : images}
          alt={`${title} preview ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className='h-full w-full object-cover transform'
        />
      </AnimatePresence>

      {/* Progress Indicators (Dots) */}
      {images.length > 1 && isHovered && (
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5'>
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-4 bg-purple-500' : 'w-1 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectImageSlider
