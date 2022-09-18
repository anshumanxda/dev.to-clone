import React from 'react'
import Tab from './Tab'

const HeroSection = ({ children }) => {
  return (
    <div className='flex-1'>
      <Tab />
      {children}
    </div>
  )
}

export default HeroSection