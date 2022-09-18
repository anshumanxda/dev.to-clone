import React from 'react'
import parser from 'html-react-parser'
import moment from 'moment/moment'

import styles from 'styles/Article.module.css'

const Main = ({ data }) => {
  return (
    <div className='max-w-[800px] bg-white rounded-lg border overflow-hidden'>
      <img src={data?.cover_image} alt="" />
      <div className='mx-auto px-20'>
        <div className='flex gap-2 mt-9 mb-4 items-center'>
          <img className='w-[40px] h-[40px] rounded-full' src={data?.user?.profile_image_90} alt="" />
          <div>
            <p className='font-semibold text-sm text-gray-600'>
              {data?.user?.name}
            </p>
            <p className='text-xs text-gray-600'>
              {moment(data?.published_at).format("ll")}
            </p>
          </div>
        </div>
        <h2 className="text-[48px] font-bold  leading-[55px] ">{data?.title}</h2>
        <div className="flex gap-2">
          {data?.tags?.map((item, index) => (
            <p
              key={index}
              className="text-base text-gray-600 hover:bg-gray-200 py-1 px-2 rounded-md cursor-pointer "
            >
              #{item}
            </p>
          ))}
        </div>

        <div className={`${styles.content} my-10`}>
          {parser(data?.body_html)}
        </div>
      </div>
    </div>
  )
}

export default Main