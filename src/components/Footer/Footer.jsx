import './footer.scss'
import ContactForm from '../Forms/ContactForm'
import content from '../../data/data.json'

const Footer = () => {
  const data = content.footer
  return (
    <footer id='footer'>
      <div className='container'>
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
    </footer>
  )
}

export default Footer
