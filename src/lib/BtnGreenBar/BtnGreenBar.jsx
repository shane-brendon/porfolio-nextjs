'use client'

import './BtnGreenBar.scss'
import Link from 'next/link'
import content from '../../data/data.json'
import { motion } from 'motion/react'

const BtnGreenBar = ({ text, type, link = '/', blank = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      }}
      className='btn--greenBar'
    >
      {(type === 'btn' || type === 'submit') && (
        <button type={type}>
          <span>{text}</span>
        </button>
      )}
      {type === 'link' && (
        <Link href={link} target={blank ? '_blank' : ''}>
          {text}
        </Link>
      )}
    </motion.div>
  )
}

export default BtnGreenBar
