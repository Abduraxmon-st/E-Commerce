import React, { useState } from 'react'
import { Card } from '../ui/card'
import { useMainContext } from '@/context/MainContext'

export const CartCard = ({ img, name, currentPrice, item }) => {
   const { toCart, updateQuantity } = useMainContext()
   return (
      <Card className='group flex flex-row justify-between items-center px-10'>
         <div className='flex items-center justify-between w-[35%]'>
            <div className='relative flex items-center gap-5'>
               <img className='w-13.5 h-13.5' src={img} alt="" />
               <p className='line-clamp-1'>{name}</p>
               <button onClick={() => toCart(item)} className='absolute -left-3 -top-1.5 hidden group-hover:block'>
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx={12} cy={12} r={9} fill="#DB4444" />
                     <path d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
            </div>
            <p>${currentPrice}</p>
         </div>
         <input onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} className='border-2 rounded-sm w-[72px] px-3 h-11' type="number" defaultValue={item.quantity} min={1} max={50} />
         <p className='pr-[2.5%] w-17'>${item.quantity * currentPrice}</p>
      </Card>
   )
}
