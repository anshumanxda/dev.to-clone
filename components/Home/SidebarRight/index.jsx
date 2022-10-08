import React from 'react'

import BannerComponent from './BannerComponent'
import Listing from './Listing'

const SidebarRight = () => {
  return (
    <div className='max-w-[325px] mt-[12px] hidden md:block '>
      <BannerComponent />
      <Listing />
    </div>
  )
}

export default SidebarRight