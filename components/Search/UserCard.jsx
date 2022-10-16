import React from 'react'

const UserCard = ({ data }) => {
  return (
    <a target='_blank' rel='noreferrer' href={`https://dev.to/${data?.user?.username}`}>
      <div className='gap-3 border border-gray-200 bg-white p-6 pb-9 items-start my-2 rounded-md relative'>
        <div className='flex gap-3'>
          <img className=' w-[30px] h-[30px] rounded-full ' src={data?.user?.profile_image_90} alt="" />
          <div>
            <p>{data?.user?.username}</p>
          </div>
        </div>
        <h2 className='text-base lg:text-xl font-semibold mt-4'>{data?.title}</h2>
        <button className='bg-blue-700 text-white absolute bottom-5 right-5 py-2 px-3 rounded-lg'>
          Follow
        </button>
      </div>
    </a>
  )
}

export default UserCard