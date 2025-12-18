import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { IoStar } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router'

const ProductCard = ({ product }) => {
  const { title, image, ratingAvg, downloads, id } = product


  const navigate = useNavigate()
  return (

    <div onClick={() => navigate(`/product/${id}`)}
      className='card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out p-3'>

      <figure className='h-48 overflow-hidden'>
        <img className='w-full object-cover' src={image} alt='Shoes' />
      </figure>
      <div className='py-5 ml-2'>
        <h2 className='card-title'>{title}</h2>
      </div>

      <div className='flex justify-between pb-2'>
        <p className='btn text-green-500 bg-green-50'><FaDownload className='text-xl' />{downloads}</p>
        <p className='btn text-amber-500 bg-amber-50'><IoStar className='text-xl' />{ratingAvg}</p>
      </div>


    </div>
  )
}

export default ProductCard
