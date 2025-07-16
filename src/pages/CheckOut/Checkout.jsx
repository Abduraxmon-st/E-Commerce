import { Bcash } from '@/assets/icons/bcash'
import { MasterCard } from '@/assets/icons/MasterCard'
import { Nagad } from '@/assets/icons/Nagad'
import { Visa } from '@/assets/icons/Visa'
import { useMainContext } from '@/context/MainContext'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Checkout = () => {
  const { cart } = useMainContext()
  const coupon = 'A2W12D'
  const [coup, setCoup] = useState(null)
  const subtotal = () => {
    return cart.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0)
  }
  return (
    <div className='container mx-auto mt-20'>
      <div className='flex items-center gap-3 text-[#0000007e] text-xs leading-[21px]'>
        <Link>Account</Link>
        <span className='rotate-12'>/</span>
        <Link>My Account</Link>
        <span className='rotate-12'>/</span>
        <Link>Product</Link>
        <span className='rotate-12'>/</span>
        <Link>View Cart</Link>
        <span className='rotate-12'>/</span>
        <Link className='text-black'>CheckOut</Link>
      </div>
      <form className='flex justify-between mt-20' action="">
        <div className='w-[40%]'>
          <p className='font-medium text-4xl leading-[30px] tracking-wider font-[Inter]'>Billing Details</p>
          <div className='mt-12 flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
              <label className='opacity-40' htmlFor="fName">First Name<span className='text-[#db4444]'>*</span></label>
              <input className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="text" id='fName' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='opacity-50' htmlFor="cname">Company Name</label>
              <input className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="text" id='cname' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='opacity-50' htmlFor="street">Street Address<span className='text-[#db4444]'>*</span></label>
              <input className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="text" id='street' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='opacity-50' htmlFor="apartment">Apartment, floor, etc. (optional)</label>
              <input className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="text" id='apartment' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='opacity-50' htmlFor="city">Town/City<span className='text-[#db4444]'>*</span></label>
              <input className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="text" id='city' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='opacity-50' htmlFor="number">Phone Number<span className='text-[#db4444]'>*</span></label>
              <input className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="text" id='number' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='opacity-50' htmlFor="email">Email Address<span className='text-[#db4444]'>*</span></label>
              <input className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="email" id='email' />
            </div>
          </div>
          <div className='flex gap-2 items-center mt-6'>
            <input className='w-6 h-6 accent-[#db4444] cursor-pointer' type="checkbox" name="" id="" />
            <p title='Save this information for faster check-out next time'
              className='line-clamp-1'>Save this information for faster check-out next time</p>
          </div>
        </div>
        <div className='w-[45%]'>
          <div className='flex flex-col gap-8 overflow-y-auto w-max pr-2 h-[150px] border-y-2'>
            {cart.map((item) => (
              <div key={item.id} className='flex items-center justify-between w-[424px]'>
                <div className='flex items-center gap-6 '>
                  <img className='w-13.5 h-13.5' src={item.img} alt="" />
                  <p className='line-clamp-1'>{item.name}</p>
                </div>
                <p>${item.quantity * item.currentPrice}</p>
              </div>
            ))}
          </div>
          <div className='mt-6 flex flex-col gap-4 w-[430px]'>
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
              <p className={coup === coupon ? 'text-[#db4444] font-medium flex gap-6' : ''}><span className='text-[#db4444]'>{coup === coupon && '-50% '}</span> ${coup === coupon ? subtotal() / 2 : subtotal()}</p>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-between w-[430px] mt-8'>
              <div className='flex items-center gap-4'>
                <input defaultChecked className='w-6 h-6 accent-black cursor-pointer' type="radio" name="bank" id="" />
                <p>Bank</p>
              </div>
              <div className='flex gap-2'>
                <Bcash />
                <Visa />
                <MasterCard />
                <Nagad />
              </div>
            </div>
            <div className='flex items-center gap-4 mt-8'>
              <input className='w-6 h-6 accent-black cursor-pointer' type="radio" name="bank" id="" />
              <p>Cash on delivery</p>
            </div>
          </div>
          <div className='flex justify-between gap-4 mt-8'>
            <input onChange={(e) => setCoup(e.target.value)} placeholder='Coupon Code' className='border-2 border-[#00000080] runded-sm px-6 py-4 w-[57%] rounded-sm' type="text" />
            <button className='bg-[#db4444] text-white py-4 px-12 rounded-sm'>Apply Coupon</button>
          </div>
          {coup !== null && <p className={`mt-2 ${coupon === coup && 'text-[#db4444]'}`}>{coupon === coup ? "to -50% for all products" : 'Invalid Coupon'}</p>}
          <button className='bg-[#db4444] text-white py-4 px-12 rounded-sm mt-8'>Place Order</button>
        </div>
      </form>
    </div>
  )
}
// Tojixojayev Abduraxmon U7