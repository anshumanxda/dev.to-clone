import React, { useState } from "react";
import Card from "./Card";
import { useRouter } from "next/router";

import useListing from "reactQuery/useListing";
import DetailModal from "./Modal";

import style from "styles/Listing.module.css";

const Main = () => {
  const router = useRouter();
  const { listingType } = router.query;
  const { data, isLoading } = useListing(listingType);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState(" ");

  if (isLoading) return "Loading...";

  function openModal () {
    setIsOpen(true);
  }

  function closeModal () {
    setIsOpen(false);
  }
  return (
    <>
      <DetailModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        data={dataForModal}
      />
      <div className={`grid ${style["listing-sidebar-card"]}`}>
        {data.data?.map((item) => (
          <Card
            key={item.id}
            data={item}
            openModal={openModal}
            setDataForModal={setDataForModal}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
