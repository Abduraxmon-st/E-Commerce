import React, { useState } from 'react'
import sideImage from '../../../assets/img/sideImage.png'
import { SignIn } from '../components/SignIn'
import { Login } from '../components/Login'
export const SignUp = () => {
  const [show, setShow] = useState(false)
  const toggle = () => {
    setShow(prev => !prev)
  }
  return (
    <div className='container mx-auto mt-15 flex items-center justify-between'>
      <img className='relative -left-[134px] w-[790px]' src={sideImage} alt="" />
      <div className='overflow-x-hidden w-[371px]'>
        <div className={`flex items-center gap-1 w-max ${show ? '-translate-x-1/2' : 'translate-x-0'}`}>
          <SignIn show={() => toggle()} />
          <Login show={() => toggle()} />
        </div>
      </div>
    </div>
  )
}
// Tojixojayev Abduraxmon U7