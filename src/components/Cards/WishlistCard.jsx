import React from 'react'
import { useMainContext } from '../../context/MainContext'

export const WishlistCard = ({ badge, img, name, currentPrice, originalPrice, item }) => {
   const { cart, toCart, addWishList } = useMainContext()
   const incart = cart.find(el => el.id === item.id)

   return (
      <div className='w-max'>
         <div className='relative flex justify-center items-center bg-[#F5F5F5] w-[270px] h-[250px] rounded-sm'>
            <img src={img} alt="product picture" />
            {
               badge !== null && badge !== 'new' && <span className=' absolute top-3 left-3 text-xs leading-[18px] px-3 py-1 bg-[#DB4444] text-white rounded-sm'>-{badge}%</span>
            }
            {
               badge === 'new' && <span className=' absolute top-3 left-3 text-xs leading-[18px] px-3 py-1 bg-[#00FF66] text-white rounded-sm'>NEW</span>
            }
            <div className='absolute top-3 right-3 flex flex-col gap-2'>
               <button onClick={() => addWishList(item)} className='bg-white cursor-pointer p-1 rounded-[50%]'>
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143" stroke="black" strokeWidth="1.56" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
            </div>
            <button onClick={() => toCart(item)} className={`absolute bottom-0 left-0 right-0 text-white ${incart ? 'bg-green-700' : 'bg-black'}  py-2 font-medium rounded-b-sm cursor-pointer`}>{incart ? "Added" : 'Add to Cart'}</button>
         </div>
         <div className='flex flex-col gap-2 mt-4'>
            <p className='font-medium text-base leading-6'>{name}</p>
            <div className={originalPrice ? '' : 'flex gap-2'}>
               <div className=' flex gap-3'>
                  <p className='font-medium text-base leading-6 text-[#DB4444]'>${currentPrice}</p>
                  {originalPrice && <p className='font-medium text-base leading-6 line-through opacity-50'>${originalPrice}</p>}
               </div>
            </div>
         </div>
      </div>
   )
}
