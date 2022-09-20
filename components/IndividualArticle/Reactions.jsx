import React from "react";
import UnicornSvg from "assets/images/unicorn.svg";
import { RiHeart2Line } from 'react-icons/ri'
import { BiBookmarks } from 'react-icons/bi'
import useArticleReaction from "../../reactQuery/useArticleReactions";

const Reactions = ({ data }) => {
  const { data: reactionData, isLoading } = useArticleReaction(data?.id);
  return (
    <div className={`mt-8 sticky top-[115px]`}>
      <div>
        <div className={`flex flex-col items-center mt-10`}>
          <div className="heart-svg">
            <RiHeart2Line size={30} />
          </div>
          <p className="text-xs text-gray-600">{reactionData?.data?.article_reaction_counts?.[0]?.count}</p>
        </div>
        <div className={`flex flex-col items-center mt-10 `}>
          <div className='unicorn-svg'>
            <UnicornSvg />
          </div>
          <p className="text-xs text-gray-600 ">{reactionData?.data?.article_reaction_counts?.[1]?.count}</p>
        </div>
        <div className={`flex flex-col items-center mt-10 `}>
          <div className="saved-svg">
            <BiBookmarks size={30} />
          </div>
          <p className="text-xs text-gray-600">{reactionData?.data?.article_reaction_counts?.[2]?.count}</p>
        </div>
      </div>
    </div>
  );
};

export default Reactions;
