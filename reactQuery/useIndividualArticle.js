import { useQuery } from "@tanstack/react-query";
import { fetchIndividualArticle } from "../apis";

function useIndividualArticle(user, slug) {
  return useQuery(["individual-article", slug, user], () =>
    fetchIndividualArticle(user, slug)
  );
}

export default useIndividualArticle;
