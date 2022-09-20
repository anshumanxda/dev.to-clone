import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Sidebar = ({ }) => {
  const router = useRouter()
  const { q, type, sort } = router.query
  return (
    <div className='w-[240px] mt-3'>
      <ul>
        <Link href={`/search/?q=${q}&type=Article&sort=${sort}`}>
          <li className={`search-sidebar ${type === undefined || type === 'Article' ? "bg-white font-bold" : ""}`}>Posts</li>
        </Link>
        <Link href={`/search/?q=${q}&type=PodcastEpisode&sort=${sort}`}>
          <li className={`search-sidebar ${type === 'PodcastEpisode' ? "bg-white font-bold" : ""} `}>Podcasts</li>
        </Link>
        <Link href={`/search/?q=${q}&type=User&sort=${sort}`}>
          <li className={`search-sidebar  ${type === 'User' ? "bg-white font-bold" : ""}`}>People</li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar