import React from 'react'

import survey from 'assets/images/survey.png'

const BannerComponent = () => {
  return (
    <div className='border px-5 py-5 pb-7 bg-[#f7f7f7] rounded-lg flex flex-col justify-center items-center'>
      <img className='rounded-md' src={survey.src} alt="" />
      <h6 className='text-[18px] font-semibold my-4'>Tell us your thoughts about DEV!</h6>
      <a className='font-bold text-[18px] text-blue-700' href="https://github.com/anshumanxda" target='_blank' rel="noreferrer">→ Share your feedback here</a>
    </div>
  )
}

export default BannerComponent