import { useQuery } from "@tanstack/react-query";
import { fetchUserAllArticles } from "../apis";

function useUserAllArticles(username) {
  return useQuery(["user-all-articles"], () => fetchUserAllArticles(username));
}

export default useUserAllArticles;
