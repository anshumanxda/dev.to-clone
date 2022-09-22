import { useQuery } from "@tanstack/react-query";
import { lisiting } from "../apis";

function useArticleReactions(listingType) {
  return useQuery(["article-reactions", listingType], () =>
    lisiting(listingType)
  );
}

export default useArticleReactions;
