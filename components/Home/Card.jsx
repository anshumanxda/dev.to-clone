import React from "react";
import Link from "next/link";
import moment from "moment/moment";

import HeartSvg from "assets/images/heart.svg";
import CommentSvg from "assets/images/comment.svg";

const Card = ({ noBorder, data, search }) => {
  return (
    <Link href={`${data?.path}`}>
      <div
        className={`flex flex-col gap-3 mt-2 cursor-pointer ${!noBorder && "border px-3 py-3 lg:px-7 lg:py-7 bg-white lg:rounded-lg"
          } `}
      >
        <div className="flex gap-3">
          <img
            className="w-10 h-10 rounded-full"
            src={data?.user?.profile_image_90}
            alt=""
          />
          <div>
            <p className="text-sm">{data?.user?.name}</p>
            <p className="text-xs text-gray-600">
              {moment(data?.published_timestamp).format("lll")}
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h2
            className={`${search ? "text-[18px]" : "text-[19px] lg:text-[26px]"
              } font-semibold my lg:my-3`}
          >
            {data?.title}
          </h2>
          <div className="flex gap lg:gap-2 flex-wrap mt-2">
            {data?.tag_list?.map((item, index) => (
              <p
                key={index}
                className="text-sm lg:text-base text-gray-600 hover:bg-gray-200 py-1 px-2 rounded-md cursor-pointer "
              >
                #{item}
              </p>
            ))}
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap lg:gap-6 items-center justify-center">
              <div className="flex items-center gap-2 hover:bg-gray-100 px-2 lg:px-3 py-1 rounded-xl">
                <HeartSvg />
                <p className="text-xs lg:text-sm text-gray-600">
                  {" "}
                  {data?.public_reactions_count}{" "}
                  <span className="hidden lg:inline-block">reactions</span>{" "}
                </p>
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://dev.to${data?.path}/#comments`}
              >
                <div className="flex items-center gap-2 hover:bg-gray-100 px-2 lg:px-3 py-1 rounded-xl">
                  <CommentSvg />
                  <p className="text-xs lg:text-sm text-gray-600">
                    {data?.comments_count}{" "}
                    <span className="hidden lg:inline-block">comments</span>
                  </p>
                </div>
              </a>
            </div>
            <p className="text-sm text-gray-600">
              {data?.reading_time} min read
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
