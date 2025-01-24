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

      <div className='ringPattern__footer'>
        <div className='ringPattern__footer--container'>
          <RingPattern />
        </div>
      </div>
      <div className='container'>
        <LinksComponent />
      </div>
    </footer>
  )
}

export const LinksComponent = () => {
  const data = content.global.author
  return (
    <div id='links' className='links'>
      <h3 className='links--name'>{data}</h3>
      <ul className='links--socials'>
        <li className='github'>
          <Link href={'https://github.com/shane-brendon'} target='blank_'>
            <IconGithub />
          </Link>
        </li>
        <li className='linkedin' target='blank_'>
          <Link href={'https://www.linkedin.com/in/shane-ramah-naik-50b023250/?originalSubdomain=mu'}>
            <IconLinkedin />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
