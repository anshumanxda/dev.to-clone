import { useQuery } from "@tanstack/react-query";
import { search } from "../apis";

function useSearch(keyword, sort, type) {
  return useQuery(["search", keyword, sort, type], () =>
    search(keyword, sort, type)
  );
}

export default useSearch;
