import React from 'react'
import { Link } from 'react-router'
import ProductCard from '../Components/ProductCard'
import useProducts from '../hooks/useProducts'
import SkeletonLoader from '../Components/SkeletonLoader'
import Banner from '../Components/Banner'

const Home = () => {

  const { loading, products } = useProducts()
  // const { loading, error, products } = useProducts()

  const featuredProducts = products.slice(0, 8)

  return (
    <div>

      <Banner></Banner>

      <div className='flex flex-col justify-center items-center max-w-[1480px] mx-auto  md:px-8 lg:px-12 md:py-8 lg:py-12'>
        <h1 className='text-5xl font-bold'>Trending Apps</h1>
        <p className='text-gray-500 my-5'>Explore All Trending Apps on the Market developed by us</p>
      </div>


      <div className='max-w-[1480px] mx-auto'>
        {loading ? (
          <SkeletonLoader />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}


      </div>

      <div className='max-w-[1480px] mx-auto text-center my-20'>
        <Link className='btn btn-outline bg-linear-65 from-violet-700 to-purple-500 text-white px-10' to='/products'>
          Show All
        </Link>
      </div>

    </div>
  )
}

export default Home
