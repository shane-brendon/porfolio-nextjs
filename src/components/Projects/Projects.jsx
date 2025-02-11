'use client'

import './Projects.scss'
import content from '../../data/data.json'
import Image from 'next/image'
import BtnGreenBar from '../../lib/BtnGreenBar/BtnGreenBar'
import { motion } from 'motion/react'
const Projects = () => {
  const { global, projects } = content
  return (
    <section id='project-component'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
        }}
        className='container'
      >
        <div className='project-title'>
          <h2 className='title'>{projects.title}</h2>
          <BtnGreenBar
            text={global.contact.text}
            type={'link'}
            link='#footer'
          />
        </div>
        <div className='project-grid'>
          {projects.projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ rotate: '-3deg' }}
              transition={{
                duration: 0.1,
                scale: { type: 'spring', visualDuration: 0.5, bounce: 0.9 },
              }}
              key={index}
            >
              <div className='img-container'>
                <div className='buttons-hover desktop'>
                  <BtnGreenBar
                    text={projects.external.project}
                    type={'link'}
                    link={project.links.project}
                    blank
                  />
                  <BtnGreenBar
                    text={projects.external.code}
                    type={'link'}
                    link={project.links.code}
                    blank
                  />
                </div>
                <Image
                  src={project.image.large}
                  width={545}
                  height={400}
                  alt='project i worked on'
                />
              </div>

              <div className='description'>
                <span className='description--name'>{project.name}</span>
                <ul className='description--tags'>
                  {project.technology.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className='buttons mobile-tablet'>
                <BtnGreenBar
                  text={projects.external.project}
                  type={'link'}
                  link={project.links.project}
                  blank
                />
                <BtnGreenBar
                  text={projects.external.code}
                  type={'link'}
                  link={project.links.code}
                  blank
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
