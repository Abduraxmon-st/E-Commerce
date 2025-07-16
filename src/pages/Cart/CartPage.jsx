import { CartCard } from '@/components/Cards/CartCard'
import { Card } from '@/components/ui/card'
import { useMainContext } from '@/context/MainContext'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const CartPage = () => {
   const { cart } = useMainContext()
   const subtotal = () => {
      return cart.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0)
   }
   return (
      <div className='container mx-auto mt-20'>
         <div className='flex items-center gap-3 text-sm leading-[21px]'>
            <Link className='flex items-center gap-3 opacity-50' to='/'>Home <span className='rotate-12'>/</span></Link>
            <p>Cart</p>
         </div>
         <div className='mt-20'>
            <Card className='flex flex-row justify-between px-10'>
               <p>Product</p>
               <p>Price</p>
               <p>Quantity</p>
               <p>Subtotal</p>
            </Card>
            <div className='flex flex-col gap-10 mt-10'>
               {cart.length > 0 ? cart.map((item) => (
                  <CartCard
                     key={item.id}
                     badge={item.badge}
                     img={item.img}
                     name={item.name}
                     currentPrice={item.currentPrice}
                     originalPrice={item.originalPrice}
                     rating={item.rating}
                     item={item} />
               ))
                  :
                  <p className='text-4xl font-medium py-10 text-center'>No Products in Cart</p>
               }
            </div>
            <div className='flex justify-between mt-6'>
               <Link to={'/'}><button className='px-12 py-4 border-2 border-[#00000055] rounded-sm'>Return To Shop</button></Link>
               <button className='px-12 py-4 border-2 border-[#00000055] rounded-sm'>Update Cart</button>
            </div>
         </div>
         <div className='flex justify-between items-start mt-20'>
            <div className='flex justify-between gap-4 w-[45.1%]'>
               <input placeholder='Coupon Code' className='border-2 border-[#00000080] runded-sm px-6 py-4 w-[57%] rounded-sm' type="text" />
               <button className='bg-[#db4444] text-white py-4 px-12 rounded-sm'>Apply Coupon</button>
            </div>
            <div className='w-[40%] px-6 py-6 border-2 border-[#00000080] rounded-sm'>
               <p className='font-medium text-xl leading-7'>Cart Total</p>
               <div className='mt-6 flex flex-col gap-4'>
                  <div className='flex justify-between'>
                     <p>Subtotal:</p>
                     <p>${subtotal()}</p>
                  </div>
                  <div className='w-full border-t-2 border-[#00000080]'></div>
                  <div className='flex justify-between'>
                     <p>Shipping:</p>
                     <p>Free</p>
                  </div>
                  <div className='w-full border-t-2 border-[#00000080]'></div>
                  <div className='flex justify-between'>
                     <p>Total:</p>
                     <p>${subtotal()}</p>
                  </div>
               </div>
               <div className='flex items-center justify-center'>
                  <Link to={'/checkout'}>
                     <button className='bg-[#db4444] text-white py-4 px-12 rounded-sm mt-4'>Procees to checkout</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}
// Tojixajayev Abduraxmon U7