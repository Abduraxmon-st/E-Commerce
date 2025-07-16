import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000
export const FlashSalesTimer = () => {
   const [timeLeft, setTimeLeft] = useState({
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
   })

   useEffect(() => {
      let deadline = localStorage.getItem('flashSales')

      if (!deadline) {
         deadline = new Date().getTime() + THREE_DAYS_MS
         localStorage.setItem("flashSales", deadline)
      } else {
         deadline = parseInt(deadline, 10)
      }

      const updateTimer = () => {
         const now = new Date().getTime()
         const distance = deadline - now
         if (distance <= 0) {
            clearInterval(timerId)
            localStorage.removeItem('flashSales')
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
      <div className='mt-[140px]'>
         <div className='flex items-center gap-4'>
            <div className='w-5 h-10 bg-[#DB4444] rounded-sm'></div>
            <p className='text-[#DB4444] font-semibold text-base leading-5'>Today’s</p>
         </div>
         <div className='flex justify-between items-center'>
            <div className='flex gap-[86px] items-end'>
               <p className='font-semibold text-4xl leading-[34px] tracking-[4%] font-[Inter]'>Flash Sales</p>
               <div className='flex items-end gap-4'>
                  <div>
                     <span className='font-medium text-xs leading-[18px]'>Days</span>
                     <p className='font-bold text-[32px] leading-[30px] tracking-wider'>{timeLeft.days}</p>
                  </div>
                  <span className='font-semibold text-[24px] leading-[30px] text-[#E07575] pb-1'>:</span>
                  <div>
                     <span className='font-medium text-xs leading-[18px]'>hours</span>
                     <p className='font-bold text-[32px] leading-[30px] tracking-wider'>{timeLeft.hours}</p>
                  </div>
                  <span className='font-semibold text-[24px] leading-[30px] text-[#E07575] pb-1'>:</span>
                  <div>
                     <span className='font-medium text-xs leading-[18px]'>minutes</span>
                     <p className='font-bold text-[32px] leading-[30px] tracking-wider'>{timeLeft.minutes}</p>
                  </div>
                  <span className='font-semibold text-[24px] leading-[30px] text-[#E07575] pb-1'>:</span>
                  <div>
                     <span className='font-medium text-xs leading-[18px]'>Seconds</span>
                     <p className='font-bold text-[32px] leading-[30px] tracking-wider'>{timeLeft.seconds}</p>
                  </div>
               </div>
            </div>
            <div className='flex gap-2'>
               <button className='p-3 bg-[#F5F5F5] rounded-[50%] cursor-pointer rotate-180'><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" /></svg>
               </button>
               <button className='p-3 bg-[#F5F5F5] rounded-[50%] cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" /></svg>
               </button>
            </div>
         </div>
      </div>
   )
}
// Tojixojayev Abduraxmon U7