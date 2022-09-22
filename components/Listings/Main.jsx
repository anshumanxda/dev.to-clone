import React from 'react'
import Card from './Card'
import { useRouter } from "next/router";

import useListing from "reactQuery/useListing";
import DetailModal from './Modal';

import style from 'styles/Listing.module.css'

const Main = () => {
  const router = useRouter();
  const { listingType } = router.query;

  const { data, isLoading } = useListing(listingType);

  if (isLoading) return "Loading..."

  return (
    <>
      <DetailModal />
      <div className={`grid ${style['listing-sidebar-card']}`}>
        {data.data?.map((item) => <Card key={item.id} data={item} />)}
      </div>
    </>
  )
}

export default Main