
"use client"
import './skills.scss'
import content from '../../data/data.json'
import RingPattern from '../assets/RingPattern'
import { motion } from 'motion/react'

const Skills = () => {
  const { global, skills } = content
  return (
    <section id='skill-component'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
        }}
        className='container'
      >
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <span className='skill--title'>{skill.text}</span>
              <span className='skill--experience'>
                {skill.experience} {global.experience}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
      <div className='ringPattern__skill'>
        <div className='ringPattern__skill--container'>
          <RingPattern />
        </div>
      </div>
    </section>
  )
}
export default Skills
