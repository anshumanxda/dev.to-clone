import Link from 'next/link'
import React from 'react'
import { RiNotification3Line, RiUserSmileLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='border-b pb-2 bg-white fixed top-0 left-0 right-0 z-10'>
      <div className='flex justify-between items-center pt-3 max-w-[1280px] mx-auto'>
        <div className='flex gap-5'>
          <Link href='/'>
            <img className='cursor-pointer h-10' src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
          </Link>
          <input className='border border-gray-300 w-[400px] h-[40px] px-3 text-lg rounded-md outline-none focus:border-violet-700' type="text" placeholder='Search....' />
        </div>

        <div className='flex gap-5 items-center'>
          <button className='border-violet-700 border text-lg px-3 py-1 rounded-md'>Create Post</button>
          <RiNotification3Line size='25' />
          <RiUserSmileLine size='25' />
        </div>
      </div>
    </div>
  )
}

export default Navbar