import React, { useEffect } from 'react'
import './index.css'
import AppLayout from './layout/AppLayout'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import ReactGA from 'react-ga4'

const App = () => {
  const TRACKING_ID = import.meta.env.VITE_MEASUREMENT_ID

  // Use absolute URL for OG image
  const ogImageUrl = 'https://my-portfolio-nine-green-69.vercel.app/og.png'

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.initialize(TRACKING_ID)
      ReactGA.send({
        hitType: 'pageview',
        page: window.location.pathname,
      })
    }
  }, [TRACKING_ID])

  return (
    <HelmetProvider>
      <Helmet>
        {/* Standard Meta */}
        <title>
          Rajiv Kumar | Full-Stack JavaScript Engineer & MERN Specialist
        </title>
        <meta
          name='description'
          content='Tweetpik is a free, simple tool that makes it easy to capture and share professional screenshots of your tweets.'
        />

        {/* Open Graph (Facebook/LinkedIn/WhatsApp) */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://my-portfolio-nine-green-69.vercel.app'
        />
        <meta
          property='og:title'
          content='Rajiv Kumar | Full-Stack JavaScript Engineer & MERN Specialist'
        />
        <meta
          property='og:description'
          content='Tweetpik is a free, simple tool that makes it easy to capture and share professional screenshots of your tweets.'
        />
        <meta property='og:image' content={ogImageUrl} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content='Rajiv Kumar Portfolio' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:url'
          content='https://my-portfolio-nine-green-69.vercel.app'
        />
        <meta
          name='twitter:title'
          content='Rajiv Kumar | Full-Stack JavaScript Engineer & MERN Specialist'
        />
        <meta
          name='twitter:description'
          content='Tweetpik is a free, simple tool that makes it easy to capture and share professional screenshots of your tweets.'
        />
        <meta name='twitter:image' content={ogImageUrl} />
      </Helmet>
      <AppLayout />
    </HelmetProvider>
  )
}

export default App
