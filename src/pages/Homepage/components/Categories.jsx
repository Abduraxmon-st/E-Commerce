import React, { use, useContext, useState } from 'react'
import { CategoryCard } from '../../../components/Cards/CategoryCard'
import { useMainContext } from '../../../context/MainContext'

export const Categories = () => {
   const { dataCategory } = useMainContext()

   const [num, setNum] = useState(0)
   const next = () => setNum(pr => Math.min(pr + 1, 6))
   const prev = () => setNum(pr => Math.max(pr - 1, 1))
   return (
      <div className='pt-20 border-t border-t-[#0000004d]'>
         <div className='flex items-center gap-4'>
            <div className='w-5 h-10 bg-[#DB4444] rounded-sm'></div>
            <p className='text-[#DB4444] font-semibold text-base leading-5'>Categories</p>
         </div>
         <div className='flex justify-between items-center mt-5'>
            <p className='font-semibold text-4xl leading-[34px] tracking-[4%] font-[Inter]'>Browse By Category</p>
            <div className='flex gap-2'>
               <button onClick={prev} className='p-3 bg-[#F5F5F5] rounded-[50%] cursor-pointer rotate-180'><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" /></svg>
               </button>
               <button onClick={next} className='p-3 bg-[#F5F5F5] rounded-[50%] cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" /></svg>
               </button>
            </div>
         </div>
         <div className='flex justify-between mt-15'>
            {
               dataCategory?.map((item) => (
                  <CategoryCard onClick={() => setNum(item.id)} key={item.id} svg={item.svg} title={item.title} selected={num === item.id} />
               ))
            }
         </div>
      </div>
   )
}
