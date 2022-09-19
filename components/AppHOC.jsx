import React from 'react'

import Navbar from './Navbar'
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import Tab from './Tab';

const AppHOC = ({ children }) => {
  return (
    <div className='mb-20'>
      <Navbar />
      <div className="mt-[75px] flex gap-10 max-w-[1280px] mx-auto">
        <SidebarLeft />
        <div className='flex-1'>
          <Tab />
          {children}
        </div>
        <SidebarRight />
      </div>
    </div>
  )
}

export default AppHOC