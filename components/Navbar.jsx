import Link from 'next/link'
import React, { useState, useRef } from 'react'
import { RiNotification3Line, RiUserSmileLine } from 'react-icons/ri'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()

  function onSubmit (e) {
    e.preventDefault()
    router.push(`/search?q=${search}`)
  }
  return (
    <div className='border-b pb-2 bg-white fixed top-0 left-0 right-0 z-10'>
      <div className='flex justify-between items-center pt-3 max-w-[1280px] mx-auto'>
        <div className='flex gap-5 items-center'>
          <Link href='/'>
            <img className='cursor-pointer h-10' src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
          </Link>
          <form onSubmit={onSubmit}>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className='border border-gray-300 w-[400px] h-[40px] px-3 rounded-md outline-none focus:border-blue-700 text-[15px]' type="text" placeholder='Search....' />
          </form>
        </div>

        <div className='flex gap-5 items-center'>
          <button className='border-blue-700 border text-[15px] text-blue-800 font-semibold px-3 py-2 rounded-md'>Create Post</button>
          <RiNotification3Line size='25' />
          <RiUserSmileLine size='25' />
        </div>
      </div>
    </div>
  )
}

export default Navbar