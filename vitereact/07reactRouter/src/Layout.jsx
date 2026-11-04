import React from 'react'
import Header from './components/header/footer/header'
import Footer from './components/header/footer/footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout 
