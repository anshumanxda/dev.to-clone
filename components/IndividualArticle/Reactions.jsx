import React from "react";
import HeartSvg from "assets/images/heart.svg";
import UnicornSvg from "assets/images/unicorn.svg";
import SavedSvg from "assets/images/save.svg";
import useArticleReaction from "../../reactQuery/useArticleReactions";

const Reactions = ({ data }) => {
  const { data: reactionData, isLoading } = useArticleReaction(data?.id);
  return (
    <div className="mt-8 sticky top-[115px]">
      <div>
        <div className={`flex flex-col items-center mt-10`}>
          <HeartSvg />
          <p>{reactionData?.data?.article_reaction_counts?.[0]?.count}</p>
        </div>
        <div className={`flex flex-col items-center mt-10 `}>
          <UnicornSvg />
          <p>{reactionData?.data?.article_reaction_counts?.[1]?.count}</p>
        </div>
        <div className={`flex flex-col items-center mt-10 `}>
          <SavedSvg />
          <p>{reactionData?.data?.article_reaction_counts?.[2]?.count}</p>
        </div>
      </div>
    </div>
  );
};

export default Reactions;
