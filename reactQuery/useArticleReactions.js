import { useQuery } from "@tanstack/react-query";
import { fetchArticleReactions } from "../apis";

function useArticleReactions(id) {
  return useQuery(["article-reactions"], () => fetchArticleReactions(id));
}

export default useArticleReactions;
