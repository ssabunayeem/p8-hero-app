/* import React from 'react'

const SkeletonLoader = ({ count = 6 }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className='flex flex-col gap-4'>
          <div className='skeleton h-48 w-full'></div>
          <div className='skeleton h-4 w-28'></div>
          <div className='skeleton h-4 w-full'></div>
          <div className='skeleton h-4 w-full'></div>
          <div className='skeleton h-4 w-full'></div>
        </div>
      ))}
    </div>
  )
}

export default SkeletonLoader


 */


import React from 'react';
import { PacmanLoader } from 'react-spinners';

const SkeletonLoader = () => {
  return (
    <div className="flex justify-center items-center min-h-96">
      <PacmanLoader color="#7c3aed" size={60} />
    </div>
  );
};

export default SkeletonLoader;