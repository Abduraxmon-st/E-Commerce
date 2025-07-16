import { Card } from '@/components/ui/card'
import React from 'react'
import { Link } from 'react-router-dom'
import { AccountForm } from './AccountForm'

export const AccountPage = () => {
   const fName = JSON.parse(localStorage.getItem('userProfile'))
   
   return (
      <div className='container mx-auto mt-20'>
         <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3 text-[#0000007e]'>
               <Link to={'/'}>Home</Link>
               <span className='rotate-12'>/</span>
               <Link className='text-black' to={'/account'}>Account</Link>
            </div>
            <p className='text-sm leading-[21px]'>
               Welcome! <span className='text-[#db4444]'>{fName.firstName}</span>
            </p>
         </div>
         <div className='flex justify-between mt-20'>
            <div>
               <p className='font-medium'>Manage My Account</p>
               <ul className='flex flex-col gap-2 text-[#0000007c] pl-8.5 mt-4'>
                  <Link className='text-[#db4444]'><li>My Profile</li></Link>
                  <Link><li>Address Book</li></Link>
                  <Link><li>My Payment Options</li></Link>
               </ul>
               <p className='font-medium mt-6'>My Orders</p>
               <ul className='flex flex-col gap-2 text-[#0000007c] pl-8.5 mt-4'>
                  <Link><li>My Returns</li></Link>
                  <Link><li>My Cancellations</li></Link>
               </ul>
               <Link to='/wishlist'><p className='font-medium mt-4'>My WishList</p></Link>

            </div>
            <AccountForm/>
         </div>
      </div>
   )
}
// Tojixojayev Abduraxmon U7