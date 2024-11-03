import './footer.scss'
import ContactForm from '../Forms/ContactForm'
import content from '../../data/data.json'
import Link from 'next/link'
import IconFrontendMentor from '../assets/IconFrontEndMentor'
import IconGithub from '../assets/IconGithub'
import IconLinkedin from '../assets/IconLinkedIn'
import IconTwitter from '../assets/IconTwitter'
import RingPattern from '../assets/RingPattern'

const Footer = () => {
  const data = content.footer
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='top'>
          {' '}
          <div className='right'>
            <h2 className='title'>{data.contact}</h2>
            <span>
              <p>{data.description}</p>
            </span>
          </div>
          <div className='left'>
            <ContactForm data={data} />
          </div>
        </div>
      </div>

      {/* <div className='ringPattern--footer'>
        <RingPattern />
      </div> */}
      <div className='container'>
        <LinksComponent />
      </div>
    </footer>
  )
}

export const LinksComponent = () => {
  return (
    <div id='links' className='links'>
      <h3 className='links--name'>adamkeyes</h3>
      <ul className='links--socials'>
        <li className='facebook'>
          <Link href={'/'}>
            <IconFrontendMentor />
          </Link>
        </li>
        <li className='facebook'>
          <Link href={'/'}>
            <IconGithub />
          </Link>
        </li>
        <li className='facebook'>
          <Link href={'/'}>
            <IconLinkedin />
          </Link>
        </li>
        <li className='facebook'>
          <Link href={'/'}>
            <IconTwitter />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
