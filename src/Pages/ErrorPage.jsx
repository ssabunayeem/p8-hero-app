import React from 'react'
import { useRouteError } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import err from '../assets/error-404.png'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <div className='min-h-screen'>
        <Navbar />
        <div>{error.message}</div>
        <div className='flex min-h-[500px] justify-center items-center'>
          <img src={err} alt="" />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ErrorPage
