import React, { useEffect, useState, useRef } from 'react'

const CursorTracker = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e

      // Using translate3d for GPU acceleration
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
    }

    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)

    const handleHover = (e) => {
      const target = e.target
      // Logic to detect interactive elements for the "expand" effect
      if (
        ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) ||
        target.closest('a') ||
        target.closest('button') ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleHover)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleHover)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      {/* THE INNER DOT: Fast and responsive */}
      <div
        ref={dotRef}
        className='fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out will-change-transform'
      />

      {/* THE OUTER RING: Smooth "trailing" effect */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-purple-500/50 pointer-events-none z-[9998] transition-all will-change-transform flex items-center justify-center ${
          isHovering
            ? 'w-16 h-16 bg-purple-500/10 border-purple-400'
            : 'w-10 h-10'
        } ${
          isActive ? 'scale-75 border-purple-300 bg-purple-500/30' : 'scale-100'
        }`}
        style={{
          // Slower transition creates the magnetic/trailing feel
          transitionDuration: isHovering ? '250ms' : '500ms',
          transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        {/* Subtle center crosshair for "Developer" feel */}
        {isHovering && (
          <div className='w-1 h-1 bg-purple-400 rounded-full animate-ping' />
        )}
      </div>
    </>
  )
}

export default CursorTracker
