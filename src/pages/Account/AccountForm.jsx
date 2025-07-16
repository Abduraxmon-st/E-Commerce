import { Card } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const AccountForm = () => {
   const defaultData = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      password: '',
   }

   const [userData, setUserData] = useState(defaultData)
   const [formData, setFormData] = useState(defaultData)
   const [passwordData, setPasswordData] = useState({
      current: '',
      newPass: '',
      confirmNew: ''
   })
   const [error, setError] = useState('')

   useEffect(() => {
      const saved = localStorage.getItem('userProfile')
      if (saved) {
         const parsed = JSON.parse(saved)
         setUserData(parsed)
         setFormData(parsed)
      }
   }, [])

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
   }
   const handlePassChange = (e) => {
      setPasswordData({ ...passwordData, [e.target.name]: e.target.value })
   }

   const handleCancel = () => {
      setFormData(userData)
      setPasswordData({
         current: '',
         newPass: '',
         confirmNew: ''
      })
      setError('')
   }

   const handleSave = () => {
      if (passwordData.current ||
         passwordData.newPass ||
         passwordData.confirmNew
      ) {
         if (passwordData.current !== userData.password) {
            setError('Current password is incorrect')
            return
         }
         if (passwordData.newPass !== passwordData.confirmNew) {
            setError('New passwords do not match')
            return
         }
         if (passwordData.newPass === passwordData.current) {
            setError('New password must be different from the current password')
            return
         }
         formData.password = passwordData.newPass
      }

      localStorage.setItem('userProfile', JSON.stringify(formData))
      setUserData(formData)
      setPasswordData({ current: '', newPass: '', confirmNew: '' })
      setError('')
      toast.success("Profile updated succesfully!")
   }



   return (
      <Card className='px-20 py-10 flex flex-col items-start justify-start w-[74.3%]'>
         <p className='font-medium text-xl leading-7'>Edit Your Profile</p>
         <form className='w-full' onSubmit={e => e.preventDefault()} action="">
            <div className='flex justify-between w-full'>
               <div className='flex flex-col gap-2 w-[46.7%]'>
                  <label htmlFor="firstName">First Name</label>
                  <input value={formData.firstName} onChange={handleChange} className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="text" name="firstName" id="firstName" placeholder='First Name' />
               </div>
               <div className='flex flex-col gap-2 w-[46.7%]'>
                  <label htmlFor="lastName">Last Name</label>
                  <input value={formData.lastName} onChange={handleChange} className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="text" name="lastName" id="lastName" placeholder='Last Name' />
               </div>
            </div>
            <div className='flex justify-between w-full mt-6'>
               <div className='flex flex-col gap-2 w-[46.7%]'>
                  <label htmlFor="email">Email</label>
                  <input value={formData.email} onChange={handleChange} className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="text" name="email" id="email" placeholder='Email' />
               </div>
               <div className='flex flex-col gap-2 w-[46.7%]'>
                  <label htmlFor="address">Address</label>
                  <input value={formData.address} onChange={handleChange} className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="text" name="address" id="address" placeholder='Address' />
               </div>
            </div>
            <div>
               <div className='flex flex-col gap-4 w-full mt-6'>
                  <label htmlFor="email">Password Changes</label>
                  <input value={passwordData.current} onChange={handlePassChange} className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="password" name="current" id="current" placeholder='Current Password' />
                  <input value={passwordData.newPass} onChange={handlePassChange} className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="password" name="newPass" id="newPass" placeholder='New Passwod' />
                  <input value={passwordData.confirmNew} onChange={handlePassChange} className='h-[50px] bg-[#F5F5F5] px-4 rounded-sm' type="password" name="confirmNew" id="confirmNew" placeholder='Confirm New Passwod' />
               </div>
            </div>
            {error && <p className='text-[#db4444] mt-4 '>{error}</p>}
            <div className='flex items-center justify-end mt-6'>
               <button onClick={handleCancel} className='py-4 px-6'>Cancel</button>
               <button onClick={handleSave} className='px-12 py-4 bg-[#db4444] text-white rounded-sm'>Save Changes</button>
            </div>
         </form>
      </Card>
   )
}
