import React, { useState, useRef } from 'react'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'

const ParallaxCloud = ({ skills }) => {
  const containerRef = useRef(null)

  // Motion values for high-performance tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Increased stiffness and reduced damping for a "snappier" but buttery smooth feel
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 150 })
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 150 })

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect()

    // Normalize coordinates from -0.5 to 0.5
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // "p-20" ensures icons moving to the edge don't get cropped
      className='relative h-[700px] w-full flex items-center justify-center overflow-hidden bg-transparent cursor-default p-20'
    >
      {skills.map((skill, i) => {
        // Varying depths to create the 3D parallax effect
        const depth = (i % 6) + 1

        return (
          <motion.div
            key={skill.name}
            style={{
              // useTransform creates the actual movement amount
              x: useTransform(smoothX, (v) => v * (depth * 40)),
              y: useTransform(smoothY, (v) => v * (depth * 40)),
              // Spatial distribution logic
              left: `${15 + ((i * 18) % 70)}%`,
              top: `${15 + ((i * 21) % 70)}%`,
              zIndex: depth,
              willChange: 'transform', // Hardware acceleration for smoothness
            }}
            className='absolute group flex flex-col items-center justify-center'
          >
            <div
              className='p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md 
                         transition-all duration-300 group-hover:bg-white/15 group-hover:border-purple-500/50 
                         group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]'
            >
              <img
                src={skill.icon}
                alt={skill.name}
                // Fixed height/width with object-contain prevents cropping/stretching
                className={`h-12 w-12 md:h-16 md:w-16 object-contain grayscale group-hover:grayscale-0 
                           transition-all duration-500 pointer-events-none ${skill.className || ''}`}
              />
            </div>

            {/* Tooltip Label */}
            <span
              className='mt-2 text-[10px] font-mono font-medium text-purple-300/60 opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap uppercase tracking-tighter'
            >
              {skill.name}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}

export default ParallaxCloud
