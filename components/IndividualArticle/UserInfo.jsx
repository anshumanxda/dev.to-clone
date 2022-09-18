import React from 'react'
import useUserInfo from 'reactQuery/useUserInfo'

const UserInfo = ({ id }) => {
  const { data, isLoading } = useUserInfo(id)
  console.log(data)
  return (
    <div className='bg-white rounded-lg sticky top-[75px] overflow-hidden'>
      <div className='h-7 bg-black' />
      <div className='px-5'>
        <img className='w-12 rounded-full absolute top-3 left-4' src={data?.data?.profile_image} alt="" />
        <p className='font-semibold text-[1.3rem] relative left-16 text-gray-600'>{data?.data?.name}</p>
        <button className='text-center bg-blue-700 text-gray-100 w-full my-3 h-10 rounded-md'>Follow</button>
        <p className='text-gray-500 font-light'>{data?.data?.summary}</p>

        {data?.data?.location && <div className='mt-4'>
          <h6 className='font-bold text-xs text-gray-500'>LOCATION</h6>
          <p>{data?.data?.location}</p>
        </div>}

        {data?.data?.joined_at && <div className='mt-4 pb-5'>
          <h6 className='font-bold text-xs text-gray-500'>JOINED</h6>
          <p>{data?.data?.joined_at}</p>
        </div>}

      </div>
    </div>
  )
}

export default UserInfo