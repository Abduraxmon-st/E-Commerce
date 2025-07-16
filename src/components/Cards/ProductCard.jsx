import React from 'react'
import { useMainContext } from '../../context/MainContext'
import { Link } from 'react-router-dom'

export const ProductCard = ({
   badge, img, name, currentPrice, originalPrice, rating, item
}) => {
   const { cart, toCart, wishList, addWishList } = useMainContext()
   const incart = cart.find(el => el.id === item.id)
   const inwish = wishList.find(el => el.id === item.id)

   return (
      <div className='group w-max'>
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
                  {inwish ?
                     <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#db4444" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7z" /></svg>
                     :
                     <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7zm0-2.7q2.4-2.15 3.95-3.687t2.45-2.675t1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.687T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025t2.45 2.675T12 18.3m0-6.825" /></svg>}
               </button>
               <button className='bg-white cursor-pointer p-1 rounded-[50%]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 1024 1024"><path fill="currentColor" d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5M512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258s279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766m-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176m0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112s112 50.1 112 112s-50.1 112-112 112" /></svg>
               </button>
            </div>
            <button onClick={() => toCart(item)} className={`hidden absolute bottom-0 left-0 right-0 text-white ${incart ? 'bg-green-700' : 'bg-black'}  py-2 font-medium rounded-b-sm cursor-pointer group-hover:block`}>{incart ? "Added" : 'Add to Cart'}</button>
         </div>
         <div className='flex flex-col gap-2 mt-4'>
            <Link onClick={() => localStorage.setItem('detailProduct', JSON.stringify(item))} to={'/details'} className='font-medium text-base leading-6' title={name}>{name}</Link>
            <div className={originalPrice ? '' : 'flex gap-2'}>
               <div className=' flex gap-3'>
                  <p className='font-medium text-base leading-6 text-[#DB4444]'>${currentPrice}</p>
                  {item.originalPrice && <p className='font-medium text-base leading-6 line-through opacity-50'>${originalPrice}</p>}
               </div>
               <div className='flex items-center gap-2'>
                  <div className='flex gap-1'>
                     <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33" />
                     </svg>
                     <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33" />
                     </svg>
                     <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33" />
                     </svg>
                     <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33" />
                     </svg>
                     <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33" />
                     </svg>
                  </div>
                  <p className='font-semibold text-sm leading-[21px] opacity-50'>({rating})</p>
               </div>
            </div>
         </div>
         {
            item.color &&
            <div className='flex gap-2'>
               <input defaultChecked className={`w-5 h-5 rounded-2xl appearance-none ${item.color} checked:border-2 cursor-pointer`} type="radio" name={item.id} id="" />
               <input className={`w-5 h-5 rounded-2xl appearance-none bg-[#db4444] checked:border-2 cursor-pointer `} type="radio" name={item.id} id="" />
            </div>
         }
      </div>
   )
}
