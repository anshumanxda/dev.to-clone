import React from 'react'
import { useRouter } from "next/router";

import Card from 'components/Home/Card'
import PodcastCard from './PodcastCard';
import UserCard from './UserCard';

const Main = ({ isLoading, data }) => {
  const router = useRouter();
  const { q, type, sort } = router.query;
  return (
    <>{!isLoading ? (
      <div className="flex-1">
        {data?.data?.result?.map((item, index) => {
          if (type === 'Article' || type === undefined) return <Card key={index} data={item} />
          if (type === 'PodcastEpisode') return <PodcastCard key={index} data={item} />
          if (type === 'User') return <UserCard key={index} data={item} />
        })}
      </div>
    ) : (
      "Loading...."
    )}</>
  )
}

export default Main