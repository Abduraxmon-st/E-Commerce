import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SearchIcon } from '../../assets/icons/SearchIcon'
import { WishListIcon } from '../../assets/icons/WishListIcon'
import { CartIcon } from '../../assets/icons/CartIcon'
import { UserIcon } from '../../assets/icons/UserIcon'
import { UserModal } from '../modals/UserModal'

export const Navbar = () => {
  const [userModal, setUserModal] = useState(false)
  return (
    <div className='border-b-1 border-[#B2B2B2]'>
      <div className='container mx-auto relative mt-10 mb-4 flex items-center justify-between'>
        <p className='font-[Inter] font-bold text-2xl leading-6 -tracking-tight'>Exclusive</p>
        <ul className='absolute left-[40%] -translate-x-2/4 flex gap-12'>
          <NavLink to='/'>{({ isActive }) => <li className={isActive ? "border-b-2 border-b-[#00000080]" : ''}>Home</li>}</NavLink>
          <NavLink to='/contact'>{({ isActive }) => <li className={isActive ? "border-b-2 border-b-[#00000080]" : ''}>Contact</li>}</NavLink>
          <NavLink to='/about'>{({ isActive }) => <li className={isActive ? "border-b-2 border-b-[#00000080]" : ''}>About</li>}</NavLink>
          <NavLink to='/signup'>{({ isActive }) => <li className={isActive ? "border-b-2 border-b-[#00000080]" : ''}>Sign Up</li>}</NavLink>
        </ul>
        <div className='flex gap-6'>
          <div className='flex items-center justify-between w-[243px] h-[38px]  pr-3 bg-[#F5F5F5] rounded-sm'>
            <input className='w-[90%] pl-5 text-xs leading-[18px] outline-0' type="search" placeholder='What are you looking for?' />
            <button className='cursor-pointer'>
              <SearchIcon />
            </button>
          </div>
          <div className='flex items-center gap-4 relative'>
            <Link className='flex items-center w-max' to='/wishlist'><button className='cursor-pointer'><WishListIcon /></button></Link>
            <Link className='flex items-center w-max' to='/cart'><button className='cursor-pointer'><CartIcon /></button></Link>
            <button onClick={() => setUserModal(prev => !prev)} className={`w-8 h-8 flex justify-center items-center rounded-3xl cursor-pointer ${userModal && 'bg-red-500 text-white'}`}><UserIcon /></button>
            {
              userModal && <UserModal />
            }
          </div>
        </div>
      </div>
    </div>
  )
}
// Tojixojayev Abduraxmon U7