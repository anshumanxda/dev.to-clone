import React from 'react'
import Link from 'next/link'

import useListing from "reactQuery/useListing";

const Listing = () => {
  const { data, isLoading } = useListing();
  return (
    <div className='border bg-[#f7f7f7] cursor-pointer mt-3 rounded-lg'>
      <div className='flex justify-between items-center py-5 px-5'>
        <h3 className='text-[20px] font-semibold'>Listings</h3>
        <Link href='/listings'>
          <button className='text-blue-700 text-[14px]'>See all</button>
        </Link>
      </div>

      <div>
        {data?.data?.slice(0, 30)?.map((item, index) => (
          <div key={index} className='px-5 py-5 hover:bg-white border-b border-[#f2f1f1]'>
            <h3
              className="text-[16px] cursor-pointer hover:text-blue-700 text-gray-700 font-normal"
            >
              {item?.title}
            </h3>
            <p className="text-[14px] text-gray-500">{item?.category}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Listing