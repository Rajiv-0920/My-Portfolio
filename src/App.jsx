import React, { useEffect } from 'react'
import './index.css'
import AppLayout from './layout/AppLayout'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import ReactGA from 'react-ga4'
import ogImageSource from './assets/og-image.png'

const App = () => {
  const siteUrl = 'https://my-portfolio-nine-green-69.vercel.app'
  const absoluteOgImageUrl = `${siteUrl}${ogImageSource}`

  // FIX: Accessing Vite env variables correctly
  const TRACKING_ID = import.meta.env.VITE_MEASUREMENT_ID

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.initialize(TRACKING_ID)
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
    }
  }, [TRACKING_ID])

  return (
    <HelmetProvider>
      <div className='relative min-h-screen w-full overflow-hidden bg-haiti'>
        <Helmet>
          <title>Rajiv Kumar | Full-Stack JavaScript Engineer</title>
          <meta
            name='description'
            content='MERN Stack Specialist & Fiction Enthusiast.'
          />
          <link rel='canonical' href={siteUrl} />

          {/* Open Graph - Must use "property" */}
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Rajiv Kumar | Full-Stack Engineer'
          />
          <meta
            property='og:description'
            content='MERN Stack Specialist & Fiction Enthusiast.'
          />
          <meta
            property='og:url'
            content='https://my-portfolio-nine-green-69.vercel.app/'
          />

          <meta
            property='og:image'
            content='https://my-portfolio-nine-green-69.vercel.app/og-image.png'
          />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta property='og:image:type' content='image/png' />

          {/* Twitter - Must use "name" */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='twitter:image'
            content='https://my-portfolio-nine-green-69.vercel.app/og-image.png'
          />
        </Helmet>

        <AppLayout />
      </div>
    </HelmetProvider>
  )
}

export default App
