import React from 'react'
import ps5 from '../../../assets/img/ps5.png'
import woman from '../../../assets/img/woman.png'
import speaker from '../../../assets/img/speaker.png'
import parfum from '../../../assets/img/parfum.png'
import bluur from '../../../assets/img/bluur.png'
export const Arrival = () => {
   return (
      <div className='mt-35'>
         <div className='flex items-center gap-4'>
            <div className='w-5 h-10 bg-[#DB4444] rounded-sm'></div>
            <p className='text-[#DB4444] font-semibold text-base leading-5'>Featured</p>
         </div>
         <p className='font-semibold text-4xl leading-[34px] tracking-[4%] font-[Inter] mt-5'>New Arrival</p>
         <div className='flex justify-between mt-15'>
            <div className='relative px-7.5 pt-[88px] bg-black'>
               <img src={ps5} alt="arrival picture" />
               <div className='absolute bottom-8 left-8 flex flex-col gap-4 text-white'>
                  <p className='font-semibold text-2xl leading-6 tracking-wide font-[Inter]'>PlayStation 5</p>
                  <p className='text-sm leading-[21px]'>Black and White version of the PS5 <br /> coming out on sale.</p>
                  <a href="#" className='w-max border-b-2 border-b-[#5D5D5D]'>Shop Now</a>
               </div>
            </div>
            <div className=' w-[48.7%]'>
               <div className='relative bg-black flex justify-end'>
                  <img src={woman} alt="arrival picture" />
                  <div className='absolute bottom-8 left-8 flex flex-col gap-4 text-white'>
                     <p className='font-semibold text-2xl leading-6 tracking-wide font-[Inter]'>Women’s Collections</p>
                     <p className='text-sm leading-[21px]'>Featured woman collections that <br /> give you another vibe.</p>
                     <a href="#" className='w-max border-b-2 border-b-[#5D5D5D]'>Shop Now</a>
                  </div>
               </div>
               <div className='flex justify-between mt-8'>
                  <div className='relative bg-black flex justify-center items-center p-8 w-[47%]'>
                     <img src={speaker} alt="arrival picture" />
                     <div className='absolute bottom-6 left-6 flex flex-col gap-2 text-white'>
                        <p className='font-semibold text-2xl leading-6 tracking-wide font-[Inter]'>Speakers</p>
                        <p className='text-sm leading-[21px]'>Amazon wireless speakers</p>
                        <a href="#" className='w-max border-b-2 border-b-[#5D5D5D]'>Shop Now</a>
                     </div>
                  </div>
                  <div className='relative bg-black flex justify-center items-center p-8 w-[47%]'>
                     <img className='relative z-7' src={parfum} alt="arrival picture" />
                     <img className='absolute z-6' src={bluur} alt="" />
                     <div className='absolute z-8 bottom-6 left-6 flex flex-col gap-2 text-white'>
                        <p className='font-semibold text-2xl leading-6 tracking-wide font-[Inter]'>Perfume</p>
                        <p className='text-sm leading-[21px]'>GUCCI INTENSE OUD EDP</p>
                        <a href="#" className='w-max border-b-2 border-b-[#5D5D5D]'>Shop Now</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
// Tojixojayev Abduraxmon U7