'use client'

import BtnGreenBar from '@/src/lib/BtnGreenBar/BtnGreenBar'
import './hero.scss'
import Image from 'next/image'
import RingPattern from '../assets/RingPattern'
import CirclePattern from '../assets/CirclePattern'
import content from '../../data/data.json'
import { motion } from 'motion/react'

const Hero = () => {
  const data = content.hero.intro
  return (
    <section id='hero'>
      <div className='container'>
        <div className='content'>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
            }}
            className='title'
          >
            {data.first_line}
            <span className='author--name'>{data.second_line}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
            }}
            className='description'
          >
            <p>{data.description}</p>
          </motion.div>

          <BtnGreenBar text={'contact me'} type={'link'} link='#footer' />
        </div>
        <motion.div
          className='profile-picture'
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <picture>
            <source
              media='(max-width: 640px)'
              srcSet={data.images.mobile.url}
            />
            <source
              media='(max-width: 821px)'
              srcSet={data.images.tablet.url}
            />
            <Image
              src={data.images.desktop.url}
              alt='Profile picture'
              width={445}
              height={720}
              sizes='(max-width: 640px) 174px, (max-width: 821px) 322px, 600px'
            />
            <div className='circlePattern__hero'>
              <div className='circlePattern__hero--container'>
                <CirclePattern />
              </div>
            </div>
          </picture>
        </motion.div>
      </div>
      <div className='ringPattern__hero'>
        <div className='ringPattern__hero--container'>
          <RingPattern />
        </div>
      </div>
    </section>
  )
}

export default Hero
