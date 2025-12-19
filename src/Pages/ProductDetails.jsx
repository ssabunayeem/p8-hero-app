import React, { useState } from 'react'
import { useParams } from 'react-router'
import useProducts from '../hooks/useProducts'
import { updateList } from '../utils/localStorage'

import { FaDownload, FaStar, FaRegCommentDots } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import Spiner from '../Components/Spiner';
// import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams()
  const { products, loading } = useProducts()

  // const [install, setInstall] = useState('Install Now')

  const [installed, setInstalled] = useState(false)


  const product = products.find(p => p.id === Number(id))

  if (loading) return <Spiner></Spiner>

  const { title, companyName, image, description, size, reviews, ratingAvg, downloads, ratings } = product || {}

  const updateList2 = (product) => {
    if (installed) return; // safety guard

    updateList(product);
    setInstalled(true);
  };




  //   const handleAddToWishList = () => {
  //     const existingList = JSON.parse(localStorage.getItem('wishlist'))
  //     let updatedList = []
  //     if (existingList) {
  //       const isDuplicate = existingList.some(p => p.id === product.id)
  //       if (isDuplicate) return alert('Sorry vai')
  //       updatedList = [...existingList, product]
  //     } else {
  //       updatedList.push(product)
  //     }
  //     localStorage.setItem('wishlist', JSON.stringify(updatedList))
  //   }

  return (
    <div className='max-w-[1480px] mx-auto mb-20'>

      <div className="max-w-8xl mx-auto px-4 py-10">

        {/* ===== Top Section ===== */}
        <div className="grid md:grid-cols-3 gap-8 items-start border-b-2 border-gray-300 pb-8">

          {/* App Image */}
          <div className="flex justify-center">
            <img
              src={image}
              alt="App Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* App Info */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-4xl font-bold">
              {title}
            </h1>

            <p className="text-lg text-gray-500">
              Developed by <span className="text-blue-600 font-medium">{companyName}</span>
            </p>

            {/* ===== Stats with Icons ===== */}
            <div className="flex gap-20 my-10">

              <div className="flex items-center gap-10">
                <div>
                  <FaDownload className="text-green-600 text-3xl" />
                  <p className="text-sm text-gray-500">Downloads</p>
                  <p className="text-3xl font-bold">{downloads}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <FaStar className="text-orange-500 text-3xl" />
                  <p className="text-sm text-gray-500">Avg Rating</p>
                  <p className="text-3xl font-bold">{ratingAvg}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <FaRegCommentDots className="text-purple-600 text-3xl" />
                  <p className="text-sm text-gray-500">Reviews</p>
                  <p className="text-3xl font-bold">{reviews}</p>
                </div>
              </div>

            </div>

            {/* Install Button */}
            <button
              onClick={() => updateList2(product)}
              disabled={installed}
              className={`btn mt-4 text-white 
    ${installed ? 'btn-disabled bg-gray-400 cursor-not-allowed' : 'btn-success'}
  `}
            >
              {installed ? 'Installed' : 'Install Now'} ({size} MB)
            </button>

          </div>
        </div>

        {/* ===== Ratings Chart Section ===== */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Ratings</h2>

          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[...ratings].reverse()}
                layout="vertical"
              >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="count" fill="#fb923c" radius={[4, 4, 4, 4]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* ===== Description ===== */}
        <div className="mt-10 border-t-2 border-gray-300 pt-6">
          <h2 className="text-lg font-semibold mb-3">Description</h2>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

      </div>





    </div>
  )
}

export default ProductDetails
