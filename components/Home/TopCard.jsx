import React from "react";
import Link from "next/link";

import Card from "./Card";

const TopCard = ({ data }) => {
  return (
    <Link href={`${data?.path}`}>
      <div className="border cursor-pointer bg-white rounded-lg mt-2 overflow-hidden">
        <img className="overflow-hidden" src={data?.main_image} alt="" />
        <div className="px-7 py-7">
          <Card data={data} noBorder={true} />
        </div>
      </div>
    </Link>
  );
};

export default TopCard;
