import React from "react";
import Link from "next/link";

import Card from "./Card";

const TopCard = ({ data }) => {
  return (
    <Link href={`${data?.path}`}>
      <div className="border cursor-pointer bg-white lg:rounded-lg mt-2 overflow-hidden">
        <img className="overflow-hidden" src={data?.main_image} alt="" />
        <div className="px-3 py-3 lg:px-7 lg:py-7">
          <Card data={data} noBorder={true} />
        </div>
      </div>
    </Link>
  );
};

export default TopCard;
