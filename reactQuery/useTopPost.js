import { useQuery } from "@tanstack/react-query";
import { fetchTopApi } from "../apis";

const useTopPost = (duration) => {
  return useQuery(["top"], () => fetchTopApi(duration));
};

export default useTopPost;
