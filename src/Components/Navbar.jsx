import React from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../assets/logo.png'
import { Github } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm md:px-20'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/products'>Apps</NavLink>
            </li>
            <li>
              <NavLink to='/wishlist'>Installation</NavLink>
            </li>
          </ul>
        </div>
        <Link to='/' className='text-2xl font-bold'>
          <div className='flex justify-center items-center'>
            <img className='w-12' src={logo} alt="" /><span className='text-violet-500'>HERO.IO</span>
          </div>
        </Link>
      </div>
      <div className='navbar-center '>
        <ul className='menu menu-horizontal px-1 hidden lg:flex'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/products'>Apps</NavLink>
          </li>
          <li>
            <NavLink to='/wishlist'>Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>

        <NavLink to='https://github.com/ssabunayeem' className='btn bg-linear-65 text-lg font-bold py-6 from-violet-700 to-purple-500 text-white'>
          <Github />Contribute
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
