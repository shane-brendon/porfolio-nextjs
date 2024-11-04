'use client'
import BtnGreenBar from '@/src/lib/BtnGreenBar/BtnGreenBar'
import './forms.scss'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
const ContactForm = ({ data }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        'https://hooks.airtable.com/workflows/v1/genericWebhook/appv10EM7dg1QTHVW/wflJT9eRXKSzFO7j0/wtrITuBBILseayTXR',
        {
          method: 'POST',
          body: JSON.stringify(data),
        }
      )

      if (response.ok) {
        console.log('Form submitted successfully')
      } else {
        console.log('Failed to submit form')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  return (
    <>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form--name'>
          <label htmlFor='name'>{data.name}</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder={data.name}
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 1,
                message: 'Name is required',
              },
            })}
          />
          {errors.name && (
            <>
              <p className='error-message'>{errors.name.message}</p>
              <IconError />
            </>
          )}
        </div>

        <div className='form--email'>
          <label htmlFor='email'>{data.email}</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder={data.email}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                message: 'Please enter a valid email address',
              },
            })}
          />
          {errors.email && (
            <>
              <p className='error-message'>{errors.email.message}</p>
              <IconError />
            </>
          )}
        </div>

        <div className='form--message'>
          <label htmlFor='message'>{data.message}</label>
          <textarea
            name='message'
            id='message'
            placeholder={data.message}
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && (
            <>
              <p className='error-message'>{errors.message.message}</p>
              <IconError />
            </>
          )}
        </div>

        <div className='submit-btn'>
          <BtnGreenBar type='submit' text='SEND MESSAGE' />
        </div>
      </form>
    </>
  )
}

export const IconError = () => {
  return (
    <div className='errorIcon'>
      <div className='errorIcon__circle'>
        <div className='errorIcon__circle--bar'></div>
        <div className='errorIcon__circle--dot'></div>
      </div>
    </div>
  )
}
export default ContactForm
