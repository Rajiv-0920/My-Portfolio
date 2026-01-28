import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
// 1. Import your SVG (Make sure the path matches your folder structure)
import EllipseSvg from '../assets/ellipse.svg'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import GoToTop from '../components/GoToTop'
import Footer from '../components/Footer'
import CursorTracker from '../components/CursorTracker'

const AppLayout = () => {
  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-haiti'>
      {/* BACKGROUND BLURRY ORBS 
         Replaced <div> with <img> 
         - "fixed" keeps them pinned to the screen corners
         - "pointer-events-none" ensures clicks pass through them
         - "select-none" prevents dragging the image
      */}

      {/* Top Left Orb */}
      <img
        src={EllipseSvg}
        alt=''
        className='fixed -top-40 -left-40 blur-[100px] opacity-60 pointer-events-none select-none'
      />

      {/* Bottom Right Orb */}
      <img
        src={EllipseSvg}
        alt=''
        className='fixed -bottom-90 -right-90 md:-bottom-150 md:-right-150 opacity-60 blur-[100px] pointer-events-none select-none'
      />

      {/* MAIN CONTENT CONTAINER */}
      <div className='relative z-10 mx-auto container px-0 md:px-4 py-20 text-white'>
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <Footer />

        <GoToTop />
        <CursorTracker />
      </div>
    </div>
  )
}

export default AppLayout
