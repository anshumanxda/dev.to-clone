import { useQuery } from "@tanstack/react-query";
import { fetchLatestApi } from "../apis";

function useLatestPost() {
  return useQuery(["latest"], fetchLatestApi);
}

export default useLatestPost;
