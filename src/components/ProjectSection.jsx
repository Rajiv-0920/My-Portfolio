import React from 'react'
import { motion } from 'framer-motion' // Add this import
import Title from './Title'
import codebridge from '../assets/Desktop - 4.png'
import chat from '../assets/Desktop - 6.png'
import kanban from '../assets/Desktop - 5.png'
import notenest from '../assets/Desktop - 7.png'
import { RadioTower, Github, ExternalLink } from 'lucide-react' // Added cleaner icons

const projects = [
  {
    id: 1,
    title: 'Real-time Chat Ecosystem',
    description:
      'A full-stack messaging platform featuring instant delivery, user authentication, and online status tracking. Integrated Socket.io for bi-directional communication and MongoDB for persistent message history.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind'],
    image: chat,
    liveLink: 'https://realtime-chat-app-as0r.onrender.com/',
    githubLink: 'https://github.com/Rajiv-0920/Realtime-Chat-App',
  },
  {
    id: 2,
    title: 'CodeBridge | Collaborative IDE',
    description:
      'A real-time collaborative code editor designed for pair programming. Features include live syntax highlighting, multi-user cursor tracking, and instant synchronization across clients using Socket.io.',
    tech: [
      'React',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'Monaco Editor',
      'Tailwind',
    ],
    image: codebridge,
    liveLink: 'https://codebridge-d7id.onrender.com/', // Update with your actual deployment
    githubLink: 'https://github.com/Rajiv-0920/CodeBridge',
  },
  {
    id: 3,
    title: 'Kanban-Lite | Project Management Tool',
    description:
      'A streamlined task management application featuring intuitive drag-and-drop columns, persistent local storage, and a clean interface for tracking project workflows. Designed for high performance and seamless task organization.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'dnd-kit', 'Lucide React'],
    image: kanban,
    liveLink: 'https://kanban-lite-wbs7.onrender.com',
    githubLink: 'https://github.com/Rajiv-0920/Kanban-Lite',
  },
  {
    id: 4,
    title: 'NoteNest | Smart Note-Taking App',
    description:
      'A comprehensive note management system featuring rich text editing, categorical organization, and a secure authentication system. Users can create, edit, and delete notes with a focus on clean typography and effortless searchability.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: notenest,
    liveLink: 'https://notenest-nzr0.onrender.com/',
    githubLink: 'https://github.com/Rajiv-0920/NoteNest',
  },
]

const ProjectsSection = () => {
  return (
    <section
      id='projects'
      className='relative w-full py-20 overflow-hidden bg-transparent'
    >
      <div className='relative z-10 container mx-auto px-4'>
        {/* --- SECTION TITLE --- */}
        <Title title='Projects' subtitle='Work' />

        {/* --- PROJECTS GRID --- */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              // ANIMATION: Staggered reveal as user scrolls
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col'
            >
              {/* IMAGE CONTAINER */}
              <div className='relative h-56 w-full overflow-hidden'>
                {/* Visual Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60 z-10'></div>
                <div className='absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'></div>

                <img
                  src={project.image}
                  alt={project.title}
                  className='h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105'
                />
              </div>

              {/* CONTENT CONTAINER */}
              <div className='p-6 flex flex-col flex-grow bg-gradient-to-b from-white/5 to-transparent'>
                {/* Title */}
                <h3 className='text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors font-karla'>
                  {project.title}
                </h3>

                {/* Description */}
                <p className='text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 font-karla font-light'>
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className='mt-auto flex flex-wrap gap-2 mb-6'>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className='text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-md bg-purple-500/5 text-purple-300/80 border border-purple-500/10 group-hover:border-purple-500/30 transition-colors'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS (Buttons) */}
                <div className='flex items-center gap-4 pt-4 border-t border-white/5'>
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 text-sm font-medium text-white/80 hover:text-purple-400 transition-colors'
                  >
                    <RadioTower
                      size={18}
                      className='animate-pulse text-purple-500'
                    />
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-white transition-colors ml-auto group/link'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={2}
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
                      />
                    </svg>
                    <span className='group-hover/link:underline decoration-purple-500/50 underline-offset-4'>
                      Source Code
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- VIEW ALL BUTTON --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='mt-20 text-center'
        >
          <a
            href='https://github.com/rajiv-0920?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative inline-flex items-center justify-center px-12 py-4 font-karla overflow-hidden rounded-full border border-purple-500/40 bg-purple-500/5 text-white transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]'
          >
            {/* Shimmer Effect */}
            <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]'></span>

            <span className='relative flex items-center gap-3 tracking-wide'>
              Explore More Repositories
              <Github
                size={20}
                className='group-hover:rotate-12 transition-transform'
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
