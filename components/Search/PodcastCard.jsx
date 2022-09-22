import React from 'react'

const PodcastCard = ({ data }) => {
  return (
    <a target='_blank' rel="noreferrer" href={`https://dev.to${data.path}`}>
      <div className='flex gap-3 border border-gray-200 bg-white p-6 items-center mb-2 rounded-md '>
        <img className='w-[50px] h-[50px] rounded-md ' src={data?.podcast?.image_url} alt="" />
        <div>
          <p className='text-xs text-gray-600'>{data?.podcast?.title}</p>
          <p className='text-xl font-semibold text-gray-900'>{data?.podcast?.title}</p>
        </div>
      </div>
    </a>
  )
}

export default PodcastCard