import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.scss'

const Layout = () => {
  return (
    <>
      <Header/>
      <div className='container'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout
