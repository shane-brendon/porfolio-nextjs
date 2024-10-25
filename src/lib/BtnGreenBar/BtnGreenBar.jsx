import './BtnGreenBar.scss'
import Link from 'next/link'

const BtnGreenBar = ({ text, type, link = '/', blank = false }) => {
  return (
    <div className='btn--greenBar'>
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
    </div>
  )
}

export default BtnGreenBar
