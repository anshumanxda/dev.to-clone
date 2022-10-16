import React from 'react'

const Top = () => {
  return (
    <div className='flex justify-between items-start mt-2'>
      <h1 className='text-3xl font-semibold'>Listings</h1>
      <div className='flex gap-5 '>
        <a href="" className='bg-gray-300 px-4 py-2 rounded-md'>
          Create
        </a>
        <a href="" className='bg-gray-300 px-4 py-2 rounded-md'>
          Manage
        </a>
      </div>
    </div>
  )
}

export default Top