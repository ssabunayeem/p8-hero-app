import React from 'react'
import { Link, useRouteError } from 'react-router'
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

        <div className="flex flex-col items-center justify-center py-10
                bg-gradient-to-r from-violet-500 via-indigo-100 to-purple-500 ">


          <h1 className="text-9xl font-extrabold text-white mb-4 "><img src={err} alt="" /></h1>
          <p className="text-5xl font-bold text-purple-600 mb-2">Oops! Page Not Found</p>
          <p className="text-lg text-purple-800 mb-20">The page you are looking for is not available.</p>
          <Link
            to="/"
            className="px-10 py-5 bg-violet-700 font-bold rounded-lg shadow-lg hover:bg-purple-700 text-white transition-all"
          >
            Go Back Home
          </Link>

        </div>


        <Footer />
      </div>
    </>
  )
}

export default ErrorPage
