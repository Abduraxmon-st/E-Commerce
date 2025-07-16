import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import jblwidget from '../../../assets/img/jblwidget.png'
const DAYS_MS = 5 * 24 * 60 * 60 * 1000

export const WidgetTimer = () => {
   const [timeLeft, setTimeLeft] = useState({
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
   })

   useEffect(() => {
      let deadline = localStorage.getItem('widgetSale')

      if (!deadline) {
         deadline = new Date().getTime() + DAYS_MS
         localStorage.setItem("widgetSale", deadline)
      } else {
         deadline = parseInt(deadline, 10)
      }

      const updateTimer = () => {
         const now = new Date().getTime()
         const distance = deadline - now
         if (distance <= 0) {
            clearInterval(timerId)
            localStorage.removeItem('widgetSale')
            toast.success("Aksiya Yakunlandi")
            setTimeLeft({
               days: '00',
               hours: '00',
               minutes: '00',
               seconds: '00',
            })
            return
         }

         const days = Math.floor(distance / (1000 * 60 * 60 * 24))
         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
         const seconds = Math.floor((distance % (1000 * 60)) / 1000)

         setTimeLeft({
            days: days.toString().padStart(2, '0'),
            hours: hours.toString().padStart(2, '0'),
            minutes: minutes.toString().padStart(2, '0'),
            seconds: seconds.toString().padStart(2, '0'),
         })
      }

      const timerId = setInterval(updateTimer, 1000)
      updateTimer()
      return () => clearInterval(timerId)
   }, [])
   return (
      <div className='relative mt-35 bg-black'>
         <div className='relative py-17 pl-14 flex flex-col gap-8'>
            <p className='font-semibold text-base leading-5 text-[#00FF66]'>Categories</p>
            <p className='text-white font-semibold text-5xl leading-[60px] tracking-wider font-[Inter]'>Enhance Your <br /> Music Experience</p>
            <div className='flex gap-6'>
               <div className='flex flex-col justify-center items-center w-[62px] h-[62px] bg-white rounded-[50%]'>
                  <p className='font-semibold text-base leading-4'>{timeLeft.days}</p>
                  <p className=' text-[11px] leading-[14px]'>Days</p>
               </div>
               <div className='flex flex-col justify-center items-center w-[62px] h-[62px] bg-white rounded-[50%]'>
                  <p className='font-semibold text-base leading-4'>{timeLeft.hours}</p>
                  <p className=' text-[11px] leading-[14px]'>Hours</p>
               </div>
               <div className='flex flex-col justify-center items-center w-[62px] h-[62px] bg-white rounded-[50%]'>
                  <p className='font-semibold text-base leading-4'>{timeLeft.minutes}</p>
                  <p className=' text-[11px] leading-[14px]'>Minutes</p>
               </div>
               <div className='flex flex-col justify-center items-center w-[62px] h-[62px] bg-white rounded-[50%]'>
                  <p className='font-semibold text-base leading-4'>{timeLeft.seconds}</p>
                  <p className=' text-[11px] leading-[14px]'>Seconds</p>
               </div>
            </div>
            <button className='font-medium bg-[#00FF66] text-[#fafafa] px-12 py-4 w-max rounded-sm mt-2'>Buy Now!</button>
         </div>
         <div className='absolute top-20 right-15'>
            <div className='absolute top-4 right-30 z-9 w-80 h-80 bg-[#ffffff43] border border-[#ffffff00] rounded-[50%] shadow-[0px_0px_80px_80px_#ffffff43] text-[#ffffff43]'></div>
            <img className='relative z-10' src={jblwidget} alt="" />
         </div>
      </div>
   )
}
// Tojixojayev Abduraxmon U7
