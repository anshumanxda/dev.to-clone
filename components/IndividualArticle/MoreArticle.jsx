import React from 'react'

const MoreArticle = ({ data }) => {
  const bro = [1, 2, 3, 4, 5, 5]
  return (
    <div>
      <p>More from <a href="https://dev.to/">Mahmoud Harmouch</a></p>
      {bro?.map((item) => {
        <div>
          <p>9 Figma Alternatives For A Blazingly Fast Increase</p>
          {data?.tags?.map((item, index) => (
            <p
              key={index}
              className="text-base text-gray-600 hover:bg-gray-200 py-1 px-2 rounded-md cursor-pointer "
            >
              #{item}
            </p>
          ))}
        </div>
      })}
    </div>
  )
}

export default MoreArticle