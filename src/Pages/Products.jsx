import React, { useState } from 'react'
import useProducts from '../hooks/useProducts'
import ProductCard from '../Components/ProductCard'
import SkeletonLoader from '../Components/SkeletonLoader'

const Products = () => {
  const { products, loading } = useProducts()
  const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase()
  const searchedProducts = term
    ? products.filter(product =>
      product.name.toLocaleLowerCase().includes(term)
    )
    : products

  return (
    <div className='max-w-[1480px] mx-auto mb-15'>

      <div className='text-center my-10 text-4xl'>
        <h1 className='text-4xl font-bold'>Our All Applications </h1>
        <h2 className='text-lg text-gray-600 my-2 '>Explore All Apps on the Market developed by us. We code for Millions</h2>
      </div>

      <div className='flex justify-between py-5 items-center my-5'>

        <h1 className='text-2xl font-semibold'>
          {' '}
          <span className=' text-gray-500'>
            ({searchedProducts.length}) App Found.
          </span>
        </h1>
        <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Products'
          />
        </label>
      </div>
      {loading ? (
        <SkeletonLoader count={16} />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {searchedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Products
