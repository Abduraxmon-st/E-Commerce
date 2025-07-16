import React from 'react'
import { Outlet } from 'react-router-dom'
import { AddBanner } from '../components/AddBanner'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const RootLayout = () => {
  return (
    <div>
      <AddBanner />
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}
