import { Card } from '@/components/ui/card'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Contact = () => {
  const defaultData = {
    firstName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formData, setFormData] = useState(defaultData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const send = (e) => {
    e.preventDefault()
    toast.success('Your Message was Sended')
    console.log(formData);
  }
  return (
    <div className='container mx-auto mt-20'>
      <div className='flex items-center gap-3 text-[#0000007e] mb-20'>
        <Link to={'/'}>Home</Link>
        <span className='rotate-12'>/</span>
        <Link className='text-black' to={'/contact'}>Contact</Link>
      </div>
      <div className='flex justify-between w-full'>
        <Card className={'px-8.5 py-10 w-[29%] rounded-sm gap-8'}>
          <div>
            <div className='flex items-center gap-4 font-medium'>
              <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width={40} height={40} rx={20} fill="#DB4444" />
                <path d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>Call To Us</p>
            </div>
            <p className='text-sm leading-[21px] mt-6'>We are available 24/7, 7 days a week.</p>
            <p className='text-sm leading-[21px] mt-4'>Phone: +8801611112222</p>
          </div>
          <div className='border-t-2 border-[#AFAFAF]'></div>
          <div>
            <div className='flex items-center gap-4 font-medium'>
              <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width={40} height={40} rx={20} fill="#DB4444" />
                <path d="M10 13L20 20L30 13M10 27H30V13H10V27Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>Write To US</p>
            </div>
            <p className='text-sm leading-[21px]'>Fill out our form and we will contact you within 24 hours.</p>
            <p className='text-sm leading-[21px] mt-6'>Emails: <a href="#">customer@exclusive.com</a></p>
            <p className='text-sm leading-[21px] mt-4'>Emails: <a href="#">support@exclusive.com</a></p>
          </div>
        </Card>
        <Card className={'px-8 py-10 w-[68.4%] gap-0'}>
          <form onSubmit={send} className='flex flex-col justify-between w-full h-full' action="">
            <div className='flex justify-between items-end'>
              <input onChange={handleChange} className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm w-[32%]' type="text" name="firstName" placeholder='First Name *' />
              <input onChange={handleChange} className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm w-[32%]' type="text" name="email"  placeholder='Your Email *' />
              <input onChange={handleChange} className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm w-[32%]' type="text" name="phone"  placeholder='Your Phone *' />
            </div>
            <textarea name='message' onChange={handleChange} placeholder='Your Massage' className=' bg-[#F5F5F5] px-4 py-3 rounded-sm w-full h-full mt-8 resize-none'></textarea>
            <button type='submit' className='w-max ml-auto px-12 py-4 bg-[#db4444] text-white font-medium rounded-sm mt-7'>Send Message</button>
          </form>
        </Card>
      </div>
    </div>
  )
}
// Tojixojayev Abduraxmon U7