import React, { useEffect } from 'react'
import './index.css'
import AppLayout from './layout/AppLayout'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import ReactGA from 'react-ga4'
// 1. Import your OG image directly
import ogImageSource from './assets/og-image.png'


const App = () => {
  // 2. Define your production URL
  const siteUrl = 'https://your-portfolio-link.com'

  // 3. Construct the absolute path dynamically
  const absoluteOgImageUrl = `${siteUrl}${ogImageSource}`


// Replace with your actual Measurement ID from Google Analytics
const TRACKING_ID = "G-XXXXXXXXXX" 

const App = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID)
    // Send initial pageview
    ReactGA.send({ hitType: "pageview", page: window.location.pathname })
  }, [])

  return (
    <HelmetProvider>
      <div className='relative min-h-screen w-full overflow-hidden bg-haiti'>
        <Helmet>
          {/* Standard SEO */}
          <title>Rajiv Kumar | Full-Stack JavaScript Engineer</title>
          <meta
            name='description'
            content='MERN Stack Specialist & Fiction Enthusiast.'
          />
          <link rel='canonical' href={siteUrl} />

          {/* Facebook / LinkedIn Open Graph */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content={siteUrl} />
          <meta
            property='og:title'
            content='Rajiv Kumar | Full-Stack Developer'
          />
          <meta property='og:image' content={absoluteOgImageUrl} />

          {/* Twitter / X */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={absoluteOgImageUrl} />
        </Helmet>

        <AppLayout />
      </div>
    </HelmetProvider>
  )
}

export default App
