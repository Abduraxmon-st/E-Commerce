import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import whiteJ from '../../assets/img/whiteJ.png'
import whiteJ1 from '../../assets/img/whiteJ1.png'
import whiteJ2 from '../../assets/img/whiteJ2.png'
import whiteJ3 from '../../assets/img/whiteJ3.png'
import whiteJ4 from '../../assets/img/whiteJ4.png'
import { ProductCard } from '@/components/Cards/ProductCard'
import { useMainContext } from '@/context/MainContext'

export const ProductDetails = () => {
   const { dataProduct } = useMainContext()
   const detailProduct = JSON.parse(localStorage.getItem('detailProduct'))
   const [defImg, setDefImg] = useState(whiteJ)
   const imgData = [
      { id: 1, pic: whiteJ1 },
      { id: 2, pic: whiteJ2 },
      { id: 3, pic: whiteJ3 },
      { id: 4, pic: whiteJ4 },
   ]
   const toggle = (item) => {
      if (item !== defImg) {
         setDefImg(item)
      } else setDefImg(whiteJ)
   }
   const sizedata = [
      { size: 'XS' },
      { size: 'S' },
      { size: 'M' },
      { size: 'L' },
      { size: 'XL' }
   ]
   const [defSize, setDefSize] = useState(sizedata[2].size)
   const [defColor, setDefColor] = useState('blue_color')


   const [quantity, setQuantity] = useState(1)
   const increment = () => {
      setQuantity(prev => prev + 1)
   }
   const decrement = () => {
      if (quantity > 1) {
         setQuantity(prev => prev - 1)
      }
   }
   const handleSubmit = () => {
      console.log({ ...detailProduct, quantity: quantity, size: defSize, color: defColor });

   }
   return (
      <div className='container mx-auto mt-20'>
         <div className='flex items-center gap-3 text-[#0000007e] text-xs leading-[21px]'>
            <Link to={'/account'}>Account</Link>
            <span className='rotate-12'>/</span>
            <Link>Gaming</Link>
            <span className='rotate-12'>/</span>
            <Link className='text-black'>{detailProduct.name}</Link>
         </div>
         <div className='flex justify-between mt-20'>
            <div className='flex gap-7.5 w-[60%]'>
               <div className='flex flex-col gap-4'>
                  {imgData.map((item) => (
                     <div onClick={() => toggle(item.pic)} key={item.id} className={`bg-[#F5F5F5] rounded-sm w-[170px] h-[138px] flex items-center justify-center cursor-pointer ${item.pic === defImg ? 'shadow-[0px_0px_10px_4px_#00000080] ' : ''}`}>
                        <img src={item.pic} alt="" />
                     </div>
                  ))}
               </div>
               <div className='bg-[#F5F5F5] rounded-sm w-[500px] h-[600px] flex items-center justify-center'>
                  <img className='w-[436px]' src={defImg} alt="" />
               </div>
            </div>
            <div className='w-[34.2%]'>
               <p className='font-semibold text-2xl leading-6 tracking-wide font-[Inter]'>{detailProduct.name}</p>
               <div className='flex items-center gap-2 mt-4'>
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
                  <p className='text-sm leading-[21px] opacity-50 mr-2'>({detailProduct.rating} Reviews)</p>
                  <div className='border-1 border-black opacity-50 h-4'></div>
                  <p className='text-sm leading-[21px] text-[#00FF66] ml-2'>In Stock</p>
               </div>
               <p className='mt-4 text-2xl leading-6 tracking-wider font-[Inter]'>${detailProduct.originalPrice.toFixed(2)}</p>
               <p className='mt-6 text-sm leading-[21px]'>{detailProduct.description}</p>
               <div className='w-100 border-t-2 border-black opacity-50 my-6'></div>
               <div className='flex items-center gap-6'>
                  <p className='text-xl leading-5 tracking-wider font-[Inter]'>Colours:</p>
                  <div className='flex gap-2'>
                     <input onClick={() => setDefColor('color_blue')} defaultChecked className={`w-5 h-5 rounded-2xl appearance-none bg-[#A0BCE0] checked:border-3 cursor-pointer border-gray-700`} type="radio" name='color' id="" />
                     <input onClick={() => setDefColor('color_red')} className={`w-5 h-5 rounded-2xl appearance-none bg-[#db4444] checked:border-3 cursor-pointer  border-gray-700`} type="radio" name='color' id="" />
                  </div>
               </div>
               <div className='flex items-center gap-6 mt-6'>
                  <p className='text-xl leading-5 tracking-wider font-[Inter]'>Size:</p>
                  <div className='flex gap-4'>
                     {sizedata.map((item) => (
                        <button key={item.size} onClick={(() => setDefSize(item.size))} className={`border-2 border-[#00000080] ${defSize === item.size ? 'bg-[#db4444] border-[#db4444] text-white' : ''} rounded-sm w-8 h-8 text-sm leading-[21px] font-medium`}>{item.size}</button>
                     ))}
                  </div>
               </div>
               <div className='flex items-center gap-4 mt-6'>
                  <div className='flex items-center border rounded overflow-hidden w-max'>
                     <button className='w-10 h-11 text-4xl border-r' onClick={decrement}>-</button>
                     <input type="number"
                        className='input-hidden w-20 text-xl font-medium text-center outline-0 appearance-none'
                        min={1}
                        max={50}
                        value={quantity}
                        onChange={(e) => {
                           const value = parseInt(e.target.value)
                           if (!isNaN(value) && value >= 1) {
                              setQuantity(value)
                           }
                        }}
                     /> 
                     <button className='w-10 h-11 text-2xl border-l bg-[#db4444] text-white' onClick={increment}>+</button>
                  </div>
                  <button onClick={() => handleSubmit()} className='px-12 py-2.5 bg-[#db4444] text-white font-medium rounded-sm' >Buy Now</button>
                  <button className='flex items-center justify-center rounded-sm w-10 h-10 border-2 border-[#00000080]'>
                     <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </button>
               </div>
               <div className='border-2 border-[#00000080] rounded-sm  mt-10'>
                  <div className='flex items-center gap-4 px-6 py-4'>
                     <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_261_4843)">
                           <path d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M5 11.8182H11.6667" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M1.81836 15.4545H8.48503" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M5 19.0909H11.6667" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                           <clipPath id="clip0_261_4843">
                              <rect width={40} height={40} fill="white" />
                           </clipPath>
                        </defs>
                     </svg>
                     <div className='font-medium flex flex-col gap-2'>
                        <p>Free Delivery</p>
                        <p className='text-xs leading-[18px]'>Enter your postal code for Delivery Availability</p>
                     </div>
                  </div>
                  <div className='w-full border-t-2 border-[#00000080]'></div>
                  <div className='flex items-center gap-4 px-6 py-4'>
                     <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_261_4865)">
                           <path d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                           <clipPath id="clip0_261_4865">
                              <rect width={40} height={40} fill="white" />
                           </clipPath>
                        </defs>
                     </svg>
                     <div className='font-medium flex flex-col gap-2'>
                        <p>Return Delivery</p>
                        <p className='text-xs leading-[18px]'>Free 30 Days Delivery Returns. Details</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='mt-[140px]'>
            <div className='flex items-center gap-4'>
               <div className='w-5 h-10 bg-[#db4444] rounded-sm'></div>
               <p className='font-semibold text-[#db4444]'>Related Item</p>
            </div>
            <div className='overflow-x-auto flex gap-7.5 mt-10'>]
               {dataProduct.filter(item => item.category === 'gaming' || item.category === 'electronics').map((item) => (
                  <ProductCard
                     key={item.id}
                     badge={item.badge}
                     img={item.img}
                     name={item.name}
                     currentPrice={item.currentPrice}
                     originalPrice={item.originalPrice}
                     rating={item.rating}
                     item={item}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}
// Tojixojayev Abduraxmon U7
// Productlar categoriya orqali filter qilinib chiqariladi