import BtnGreenBar from '@/src/lib/BtnGreenBar/BtnGreenBar'
import './hero.scss'
import Image from 'next/image'
import RingPattern from '../assets/RingPattern'
import CirclePattern from '../assets/CirclePattern'

const Hero = () => {
  return (
    <section id='hero'>
      <div className='container'>
        <div className='content'>
          <h1 className='title'>
            Nice to meet you! im{' '}
            <span className='author--name'>Adam keyes</span>
          </h1>

          <div className='description'>
            <p>
              Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
          </div>

          <BtnGreenBar text={'contact me'} type={'btn'} />
        </div>
        <div className='profile-picture'>
          <picture>
            <source
              media='(max-width: 640px)'
              srcSet='/images/image-profile-mobile.webp'
            />
            <source
              media='(max-width: 821px)'
              srcSet='/images/image-profile-tablet.webp'
            />
            <Image
              src='/images/image-profile-desktop.webp'
              alt='Profile picture'
              width={445}
              height={720}
              sizes='(max-width: 640px) 174px, (max-width: 821px) 322px, 600px'
            />
            <div className='circlePattern--hero'>
              <CirclePattern />
            </div>
          </picture>
        </div>
      </div>
      <div className='ringPattern--hero'>
        <RingPattern />
      </div>
    </section>
  )
}

export default Hero
