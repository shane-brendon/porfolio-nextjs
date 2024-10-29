'use client'
import BtnGreenBar from '@/src/lib/BtnGreenBar/BtnGreenBar'
import './forms.scss'

const ContactForm = ({ data }) => {
  return (
    <form id='contact-form'>
      <div className='form--name'>
        <label htmlFor='name'>{data.name}</label>
        <input type='text' name='name' id='name' placeholder={data.name} />
      </div>

      <div className='form--email'>
        <label htmlFor='email'>{data.email}</label>
        <input type='email' name='email' id='email' placeholder={data.email} />
      </div>

      <div className='form--message'>
        <label htmlFor='message'>{data.message}</label>
        <textarea
          name='message'
          id='message'
          placeholder={data.message}
        ></textarea>
      </div>
      <div className='submit-btn'>
        <BtnGreenBar type={'submit'} text={'SEND MESSAGE'} />
      </div>
    </form>
  )
}

export default ContactForm
