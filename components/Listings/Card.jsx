import React, { useRef, useState, useEffect } from "react";
import moment from "moment/moment";
import parser from "html-react-parser";

const Card = ({ data, openModal, setDataForModal }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  const handleTitleClick = () => {
    setDataForModal(data);
    openModal();
  };

  return (
    <div
      ref={ref}
      className={`bg-white lg:px-6 px-5 py-3 lg:py-6 rounded-md border`}
      style={{
        gridRowEnd: `span ${Math.ceil((height + 2) / 20)} `,
      }}
    >
      <h3
        onClick={handleTitleClick}
        className="text-[18px] cursor-pointer text-gray-700 font-semibold"
      >
        {data?.title}
      </h3>
      <p className="text-[13px] text-gray-900 mt-1 font-light">
        {moment(data.created_at).format("DD MMM")}
      </p>
      <div className="flex gap-[2px] flex-wrap items-center mt-1">
        {data?.tags?.map((item, index) => (
          <p
            key={index}
            className="text-[14px] text-gray-900 font-light  hover:bg-gray-200 px-1 py-1 rounded-md cursor-pointer "
          >
            #{item}
          </p>
        ))}
      </div>
      {/* <div className="content listing  text-gray-600 text-[16px] ">
        {parser(data?.processed_html)}
      </div> */}

      <div className="flex gap-3 items-center mt-4">
        <div className="w-[30px] h-[30px] rounded-full border overflow-hidden">
          <img src={data?.user?.profile_image_90} alt="" />
        </div>
        <div>
          <h6 className="text-[14px]">{data?.user?.name}</h6>
          <p className="text-[12px] text-gray-500">{data?.category}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
