import { useQuery } from "@tanstack/react-query";
import { fetchRelevantApi } from "../apis";

function useRelevantPost() {
  return useQuery(["relevant"], fetchRelevantApi);
}

export default useRelevantPost;
