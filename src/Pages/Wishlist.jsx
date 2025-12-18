import React, { useState } from 'react'
import { loadWishlist, removeFromWishlist } from '../utils/localStorage'
import { FaDownload, FaStar } from 'react-icons/fa'
import Chatgpt from './Chatgpt'

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(() => loadWishlist())
  const [sortOrder, setSortOrder] = useState('none')

  if (!wishlist.length) return <Chatgpt></Chatgpt>

  const sortedItem = (() => {
    if (sortOrder === 'price-asc') {
      return [...wishlist].sort((a, b) => a.size - b.size)
    } else if (sortOrder === 'price-desc') {
      return [...wishlist].sort((a, b) => b.size - a.size)
    } else {
      return wishlist
    }
  })()

  const handleRemove = id => {
    // remove from localstorage
    removeFromWishlist(id)
    // for ui instant update
    setWishlist(prev => prev.filter(p => p.id !== id))
  }

  //   generate chart data
  const totalsByCategory = {}
  wishlist.forEach(product => {
    const category = product.category

    totalsByCategory[category] =
      (totalsByCategory[category] || 0) + product.price
  })
  const chartData = Object.keys(totalsByCategory).map(category => ({
    category,
    total: totalsByCategory[category],
  }))
  console.log(chartData)

  return (
    <div className='space-y-6 max-w-[1480px] mx-auto mb-30'>

      <div className='text-center my-10 text-4xl'>
        <h1 className='text-4xl font-bold'>Your Installed Apps </h1>
        <h2 className='text-lg text-gray-600 my-2 '>Explore All Trending Apps on the Market developed by us</h2>
      </div>

      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>
          <span className='text-2x'>
            {sortedItem.length} Products Found.
          </span>
        </h1>

        <label className='form-control w-full max-w-xs'>
          <select
            className='select select-bordered'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='none'>Sort by size</option>
            <option value='price-asc'>Low-&gt;High</option>
            <option value='price-desc'>High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className='space-y-3'>
        {sortedItem.map(p => (
          <div key={p.id} className='card card-side bg-base-100 shadow '>
            <figure>
              <img
                className='w-40 h-28 object-cover'
                src={p.image}
                alt={p.name}
              />
            </figure>


            <div className='card-body'>

              <h3 className='card-title'>{p.title}</h3>

              <div className="flex gap-5">

                <div className='flex items-center gap-2'>
                  <FaDownload className="text-green-600 text-lg" />
                  <p className="text-xl font-bold">{p.downloads}</p>
                </div>

                <div className='flex items-center gap-2'>
                  <FaStar className="text-orange-500 text-lg" />
                  <p className="text-xl font-bold">{p.ratingAvg}</p>
                </div>

                <div className='flex items-center'>
                  <p className="text-xl font-bold text-gray-500">({p.size} MB)</p>
                </div>

              </div>

            </div>
            <div className='pr-4 flex items-center gap-3'>

              <button onClick={() => handleRemove(p.id)} className='btn btn-success text-white'> Uninstall</button>

            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Wishlist
