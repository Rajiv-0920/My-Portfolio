import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion' // Add this import
import emailjs from '@emailjs/browser'
import Title from './Title'
import SocialIcons from './SocialIcons'
import { Mail, MapPin, Send } from 'lucide-react' // Using Lucide for consistency

const ContactSection = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ message: '', type: '' })

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ message: '', type: '' })

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false)
          setStatus({ message: 'Message sent successfully!', type: 'success' })
          formRef.current.reset()
          setTimeout(() => setStatus({ message: '', type: '' }), 5000)
        },
        (error) => {
          setLoading(false)
          console.error('FAILED...', error.text)
          setStatus({
            message: 'Failed to send. Please try again.',
            type: 'error',
          })
        },
      )
  }

  return (
    <section
      id='contact'
      className='relative w-full py-20 overflow-hidden text-white'
    >
      <div className='container mx-auto px-4 relative z-10'>
        {/* HEADER */}
        <Title title={'Get In Touch'} subtitle={'MESSAGE'} />

        <div className='flex flex-col md:flex-row gap-10 md:gap-20 max-w-6xl mx-auto mt-20'>
          {/* LEFT SIDE: INFO & TEXT (Animated Reveal) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex-1 flex flex-col justify-center space-y-8'
          >
            <div>
              <h3 className='text-3xl font-bold mb-4 font-karla'>
                Let's work <span className='text-purple-400'>together</span>.
              </h3>
              <p className='text-gray-300 leading-relaxed text-lg font-karla font-light'>
                I'm currently available for freelance work and full-time
                opportunities. If you have a project that needs some creative
                touch, or just want to say hi, my inbox is always open.
              </p>
            </div>

            {/* Contact Details */}
            <div className='space-y-6'>
              <div className='flex items-center gap-4 group cursor-default'>
                <div className='w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300 shadow-lg'>
                  <Mail className='w-5 h-5 text-purple-300' />
                </div>
                <div>
                  <span className='block text-xs uppercase tracking-widest text-gray-500 font-bold'>
                    Email
                  </span>
                  <a
                    href='mailto:rajiv.dev.work@gmail.com'
                    className='text-lg font-medium hover:text-purple-400 transition-colors'
                  >
                    rajiv.dev.work@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-center gap-4 group cursor-default'>
                <div className='w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300 shadow-lg'>
                  <MapPin className='w-5 h-5 text-purple-300' />
                </div>
                <div>
                  <span className='block text-xs uppercase tracking-widest text-gray-500 font-bold'>
                    Location
                  </span>
                  <span className='text-lg font-medium'>India, Remote</span>
                </div>
              </div>
            </div>

            <SocialIcons />
          </motion.div>

          {/* RIGHT SIDE: FORM (Animated Reveal) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group'
          >
            {/* Subtle Background Glow for Form */}
            <div className='absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none'></div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className='flex flex-col gap-6 relative z-10'
            >
              <div className='flex flex-col gap-2'>
                <label className='text-xs uppercase tracking-widest text-gray-400 font-bold'>
                  Your Name
                </label>
                <input
                  type='text'
                  name='user_name'
                  required
                  placeholder='John Doe'
                  className='w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all placeholder:text-white/10 font-karla'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-xs uppercase tracking-widest text-gray-400 font-bold'>
                  Email Address
                </label>
                <input
                  type='email'
                  name='user_email'
                  required
                  placeholder='john@example.com'
                  className='w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all placeholder:text-white/10 font-karla'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-xs uppercase tracking-widest text-gray-400 font-bold'>
                  Message
                </label>
                <textarea
                  name='message'
                  required
                  rows='4'
                  placeholder='Tell me about your project...'
                  className='w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all placeholder:text-white/10 font-karla resize-none'
                ></textarea>
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                >
                  {status.message}
                </motion.div>
              )}

              {/* ENHANCED SUBMIT BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                disabled={loading}
                className={`group relative mt-2 w-full py-4 rounded-full font-bold tracking-[0.1em] uppercase text-xs transition-all overflow-hidden 
                ${loading ? 'bg-gray-800 cursor-not-allowed opacity-70' : 'bg-purple-600/20 border border-purple-500/40 text-white hover:bg-purple-600/30'}`}
              >
                {/* Shimmer Effect on Button */}
                <div className='absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent'></div>

                <span className='relative z-10 flex items-center justify-center gap-2'>
                  {loading ? (
                    'Transmitting...'
                  ) : (
                    <>
                      Send Message{' '}
                      <Send
                        size={16}
                        className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300'
                      />
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
