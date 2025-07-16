import React from 'react'
// Tojixojayev Abduraxmon
export const AddBanner = () => {
  return (
    <div className='bg-black '>
      <div className='container mx-auto text-[#FAFAFA] relative flex items-center justify-center gap-2 py-4'>
         <p className='text-sm leading-[21px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
         <a href="#" className='font-semibold text-sm leading-6 text-center underline decoration-solid'>ShopNow</a>
         <select name="" id="" className='absolute right-0 bg-black text-sm leading-[21px]'>
            <option value="English">English</option>
            <option value="Ozbekcha">Ozbekcha</option>
            <option value="Русский">Русский</option>
         </select>
      </div>
    </div>
  )
}
